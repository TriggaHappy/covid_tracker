import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "../../shared-components/toolbar/toolbar.component";
import {FooterComponent} from "../../shared-components/footer/footer.component";
import {ApiGrabService} from "../../services/api-grab.service";
import {Observable} from "rxjs";
import {CasesData} from "../../models/cases";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {convertISOToDayMonthYear} from "../../utils/utils";

@Component({
  selector: 'app-case-history',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, FooterComponent, CanvasJSAngularChartsModule],
  templateUrl: './case-history.component.html',
  styleUrls: ['./case-history.component.scss']
})
export class CaseHistoryComponent implements OnInit {

  private apiService: ApiGrabService = inject(ApiGrabService);

  data: Array<any> = [];

  casesData$: Observable<CasesData> = this.apiService.getCasesData();

  ngOnInit(): void {
    this.casesData$.subscribe(caseData => {
      caseData.data.forEach(entry => {
        this.data.push({
          label: convertISOToDayMonthYear(entry.date),
          y: entry.cases
        })
      })
    })
  }

  chart = {
    title: {
      text: "Cases History"
    },
    axisY: {
      title: "Cases",
    },
    data: [{
      type: "spline",
      dataPoints: this.data
    }]
  };
}
