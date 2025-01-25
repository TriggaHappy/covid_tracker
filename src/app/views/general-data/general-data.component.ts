import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiGrabService} from "../../services/api-grab.service";
import {Observable} from "rxjs";
import {GeneralData} from "../../models/general-data";
import {ContentWrapperComponent} from "../../shared-components/content-wrapper/content-wrapper.component";

@Component({
  selector: 'app-general-data',
  standalone: true,
  imports: [CommonModule, ContentWrapperComponent],
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent {

  private apiService: ApiGrabService = inject(ApiGrabService);

  generalData$: Observable<GeneralData> = this.apiService.getGeneralData();
}
