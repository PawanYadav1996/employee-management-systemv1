import { Component, OnInit } from '@angular/core';
import { ILoadingOverlayAngularComp } from '@ag-grid-community/angular';
import { ILoadingOverlayParams } from '@ag-grid-community/core';
@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss'],
})
export class CustomLoadingComponent implements ILoadingOverlayAngularComp {
  constructor() {}

  public params!: ILoadingOverlayParams & { loadingMessage: string };

  agInit(params: ILoadingOverlayParams & { loadingMessage: string }): void {
    this.params = params;
  }
}
