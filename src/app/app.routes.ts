import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LastTenDaysComponent} from "./views/last-ten-days/last-ten-days.component";
import {GeneralDataComponent} from "./views/general-data/general-data.component";
import {CaseHistoryComponent} from "./views/case-history/case-history.component";
import {ExternalRedirectComponent} from "./shared-components/external-redirect/external-redirect.component";


export const routes: Routes = [
  {path: '', redirectTo: 'general-data', pathMatch: 'full'},
  {path: 'general-data', component: GeneralDataComponent },
  {path: 'last-ten-days', component: LastTenDaysComponent},
  {path: 'case-history', component: CaseHistoryComponent},
  //{path: 'externalRedirect', canActivate:[ExternalRedirectGuard], component: ExternalRedirectComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
