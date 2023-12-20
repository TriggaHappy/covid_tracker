import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "../../shared-components/toolbar/toolbar.component";
import {ApiGrabService} from "../../services/api-grab.service";
import {Observable} from "rxjs";
import {GeneralData} from "../../models/general-data";
import {FooterComponent} from "../../shared-components/footer/footer.component";

@Component({
  selector: 'app-last-ten-days',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, FooterComponent],
  templateUrl: './last-ten-days.component.html',
  styleUrls: ['./last-ten-days.component.scss']
})
export class LastTenDaysComponent {

  private apiService: ApiGrabService = inject(ApiGrabService);

  generalData$: Observable<GeneralData> = this.apiService.getGeneralData();

}
