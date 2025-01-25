import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiGrabService} from "../../services/api-grab.service";
import {Observable} from "rxjs";
import {GeneralData} from "../../models/general-data";
import {ContentWrapperComponent} from "../../shared-components/content-wrapper/content-wrapper.component";

@Component({
  selector: 'app-last-ten-days',
  standalone: true,
  imports: [CommonModule, ContentWrapperComponent],
  templateUrl: './last-ten-days.component.html',
  styleUrls: ['./last-ten-days.component.scss']
})
export class LastTenDaysComponent {

  private apiService: ApiGrabService = inject(ApiGrabService);

  generalData$: Observable<GeneralData> = this.apiService.getGeneralData();

}
