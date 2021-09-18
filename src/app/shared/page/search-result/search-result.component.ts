import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {RepositoryService} from "../../service/repository.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SearchPipe} from "../../pipe/search.pipe";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../component/confirmation-dialog/confirmation-dialog.component";
import {StargazerLocalService} from "../../service/stargazer-local.service";


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})


export class SearchResultComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input('mainSearchValue') mainSearchValue: any;
  inputValue: any;
  currentInputValue: any;
  repositoryData: any;
  dataLocationState: any;

  ELEMENT_DATA: any;
  dataSource: any;
  displayedColumns: any;

  starRepositories: any;

  constructor(private repositoryService: RepositoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              public dialog: MatDialog,
              private stargazerLocalService: StargazerLocalService) { }

  ngOnInit(): void {
    this.getRepository();
    this.getStarRepo();
  }


  // get repository data
  getRepository() {
    if (!this.currentInputValue) {
      // get data from history state
      this.dataLocationState = this.location.getState();
      this.inputValue = this.dataLocationState.inputValue;
    } else  this.inputValue = this.currentInputValue;
    // get data from server
    this.repositoryService.getRepository().subscribe(
      data => {
        this.repositoryData = data;
        // set data for table
        const searchPipe = new SearchPipe();
        this.ELEMENT_DATA = searchPipe.transform(this.repositoryData, this.inputValue);
        this.displayedColumns = ['position', 'full_name', 'owner', 'repositoryLink', 'star'];
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.error(err);
      }
    )
  }
  //

  // get id of star repositories
  getStarRepo() {
    this.stargazerLocalService.getStargazers().subscribe(
      data => {
        this.starRepositories = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  //

  // search in star repo to find Starred or Unstarred
  searchStarRepo(id: number) {
    return this.starRepositories.find((elem: any) => elem.id === id)
  }

  // get input value from search field component
  getInputValue(value: any) {
    this.currentInputValue = value;
    this.getRepository()
  }
  //

    // filter and paginator for table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //

  // open confirmation dialog
  openDialog(message: any, id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: message
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.message === 'star') {
          this.stargazerLocalService.addStargazers(id).subscribe(
            data => {
              this.starRepositories.push({id: id});
            },
            err => {
              console.log(err);
            }
          )
        }
        if (result.message === 'unstar') {
          this.stargazerLocalService.deleteStargazers(id).subscribe(
            data => {
              this.starRepositories = this.starRepositories.filter((elem: any) => elem.id !== id);
            },
            err => {
              console.log(err);
            }
          )
        }
      }
    });
  }
 //

}
