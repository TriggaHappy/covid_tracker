import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralData, Meta} from "../../models/general-data";
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private router: Router = inject(Router)

  @Input() metaData: Meta | undefined = undefined;

  protected readonly undefined = undefined;

  navigateToExternalSite(){
    const externalURL: string = 'https://github.com/marlon360/rki-covid-api';
    this.router.navigate(['/externalRedirect', {externalURL}])
  }

}
