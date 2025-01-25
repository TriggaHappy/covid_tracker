import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiGrabService} from "../../services/api-grab.service";
import {map, Observable} from "rxjs";
import {CasesData} from "../../models/cases";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {convertISOToDayMonthYear} from "../../utils/utils";
import {DeathsData} from "../../models/deaths";
import {ContentWrapperComponent} from "../../shared-components/content-wrapper/content-wrapper.component";

@Component({
  selector: 'app-case-history',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule, ContentWrapperComponent],
  templateUrl: './case-history.component.html',
  styleUrls: ['./case-history.component.scss']
})
export class CaseHistoryComponent implements OnInit {

  private apiService: ApiGrabService = inject(ApiGrabService);

  casesData: Array<any> = [];
  deathsData: Array<any> = [];

  casesData$: Observable<CasesData> = this.apiService.getCasesData();
  deathsData$: Observable<DeathsData> = this.apiService.getDeaths()

  ngOnInit(): void {
    this.casesData$.subscribe(caseData => {
      caseData.data.forEach(entry => {
        this.casesData.push({
          label: convertISOToDayMonthYear(entry.date),
          y: entry.cases
        })
      })
    })
    this.deathsData$.subscribe(deathsData => {
      deathsData.data.forEach(entry => {
        this.deathsData.push({
          label: convertISOToDayMonthYear(entry.date),
          y: entry.deaths
        })
      })
    })
  }

  chartCases = {
    title: {
      text: "Cases History"
    },
    axisY: {
      title: "Cases",
    },
    data: [{
      type: "spline",
      dataPoints: this.casesData
    }]
  };

  chartDeaths = {
    title: {
      text: "Deaths History"
    },
    axisY: {
      title: "Deaths",
    },
    data: [{
      type: "spline",
      dataPoints: this.deathsData
    }]
  };
}
