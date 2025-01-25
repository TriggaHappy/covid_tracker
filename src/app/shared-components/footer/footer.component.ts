import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralData} from "../../models/general-data";
import { RouterLink} from "@angular/router";
import {ApiGrabService} from "../../services/api-grab.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private apiGrabService: ApiGrabService = inject(ApiGrabService);

  generalData$: Observable<GeneralData> = this.apiGrabService.getGeneralData();
}
