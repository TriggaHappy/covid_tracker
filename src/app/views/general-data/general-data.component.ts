import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "../../shared-components/toolbar/toolbar.component";
import {HttpClient} from "@angular/common/http";
import {ApiGrabService} from "../../services/api-grab.service";
import {Observable} from "rxjs";
import {GeneralData} from "../../models/general-data";
import {FooterComponent} from "../../shared-components/footer/footer.component";

@Component({
  selector: 'app-general-data',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, FooterComponent],
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent {


  private apiService: ApiGrabService = inject(ApiGrabService);

  generalData$: Observable<GeneralData> = this.apiService.getGeneralData();


}
