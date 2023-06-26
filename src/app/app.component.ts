import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
// import { ColDef, ColGroupDef, GridReadyEvent } from 'ag-grid-community';
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  GridApi,
} from '@ag-grid-community/core';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import 'ag-grid-enterprise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ag-grid-app';
  public columnDefs: ColDef[] = [
    { field: 'country', headerClass: 'boldText' },
    { field: 'year' },
    { field: 'athlete' },
    { field: 'sport', rowGroup: true, hide: true },
    {
      field: 'gold',
      aggFunc: 'sum',
      headerName: 'Gold Sum',
      checkboxSelection: true,
      filter: true,
    },
    { field: 'silver' },
    { field: 'bronze' },
  ];
  // public columnDefs: (ColDef | ColGroupDef)[] = [
  //   { field: 'feedType', headerName: 'Feed Type' },
  //   {
  //     headerName: 'Overall (DB Create #4 - Effective #1)',
  //     children: [
  //       {
  //         field: 'overAvg',
  //         headerName: 'Average in MS',
  //         resizable: true,
  //         cellClass: 'greenOverall',
  //         cellStyle: { 'font-size': '0.8rem' },
  //       },
  //       {
  //         field: 'overMin',
  //         resizable: true,
  //         headerName: 'Min in MS',
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'overMax',
  //         resizable: true,
  //         headerName: 'Max in MS',
  //         cellClass: 'greenOverall',
  //       },
  //     ],
  //   },
  //   {
  //     headerName: 'Brownfield (Publish #2 - Effective #1)',
  //     children: [
  //       {
  //         field: 'brownAvg',
  //         headerName: 'Average in MS',
  //         resizable: true,
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'brownMin',
  //         resizable: true,
  //         headerName: 'Min in MS',
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'brownMax',
  //         resizable: true,
  //         headerName: 'Max in MS',
  //         cellClass: 'greenOverall',
  //       },
  //     ],
  //   },
  //   {
  //     headerName: 'Travel time to GF (GF LogTime #3 - Publish #2)',
  //     children: [
  //       {
  //         field: 'goldAvg',
  //         headerName: 'Average in MS',
  //         resizable: true,
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'goldMin',
  //         resizable: true,
  //         headerName: 'Min in MS',
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'goldMax',
  //         resizable: true,
  //         headerName: 'Max in MS',
  //         cellClass: 'greenOverall',
  //       },
  //     ],
  //   },
  //   {
  //     headerName: 'DB Saving (DB Create TimeStamp #4 - GF logTime #2)',
  //     children: [
  //       {
  //         field: 'travelAvg',
  //         headerName: 'Average in MS',
  //         resizable: true,
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'travelMin',
  //         resizable: true,
  //         headerName: 'Min in MS',
  //         cellClass: 'greenOverall',
  //       },
  //       {
  //         field: 'travelMax',
  //         resizable: true,
  //         headerName: 'Max in MS',
  //         cellClass: 'greenOverall',
  //       },
  //     ],
  //   },
  // ];
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 100,
    headerName: 'Sport Grouping',
    cellRendererParams: {
      suppressCount: true,
    },
  };
  public rowData!: any[];

  constructor(private http: HttpClient) {}
  public loadingOverlayComponent: any = CustomLoadingComponent;
  public loadingOverlayComponentParams: any = {
    loadingMessage: 'One moment please...',
  };

  private gridApi!: GridApi<any>;
  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;
    this.gridApi.showLoadingOverlay();
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => {
        this.rowData = data;
        this.gridApi.hideOverlay();
      });
  }
  showOverlay() {
    this.gridApi.showLoadingOverlay();
  }
  hideOverLay() {
    this.gridApi.hideOverlay();
  }
  // onGridReady(params: GridReadyEvent) {
  //   let finalArrayOfData = [];

  //   this.http.get('./assets/test.json').subscribe((res: any) => {
  //     console.log(res.monitoring.data.Treasury);
  //     let TreasuryValue = res.monitoring.data.Treasury;
  //     finalArrayOfData.push({
  //       feedType: 'Treasury',
  //       overMin: TreasuryValue?.OverAll.min,
  //       overMax: TreasuryValue?.OverAll.max,
  //       overAvg: TreasuryValue?.OverAll.avg,
  //       brownMin: TreasuryValue?.brownFieldTravel.min,
  //       brownMax: TreasuryValue?.brownFieldTravel.max,
  //       brownAvg: TreasuryValue?.brownFieldTravel.avg,
  //       goldMin: TreasuryValue?.goldFieldTravel.min,
  //       goldMax: TreasuryValue?.goldFieldTravel.max,
  //       goldAvg: TreasuryValue?.goldFieldTravel.avg,
  //       travelMin: TreasuryValue?.dbSave.min,
  //       travelMax: TreasuryValue?.dbSave.max,
  //       travelAvg: TreasuryValue?.dbSave.avg,
  //     });
  //     this.rowData = finalArrayOfData;
  //   });
  // }
}
export class PerformanceStats {
  constructor() {}
  feedType: string;
  overMin: number;
  overMax: number;
  overAvg: number;
  brownMin: number;
  brownMax: number;
  brownAvg: number;
  goldMin: number;
  goldMax: number;
  goldAvg: number;
  travelMin: number;
  travelMax: number;
  travelAvg: number;
}
export interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}
