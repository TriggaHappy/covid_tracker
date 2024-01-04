import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ObjectUnsubscribedError, Observable} from "rxjs";
import {GeneralData} from "../models/general-data";
import {CasesData} from "../models/cases";
import {DeathsData} from "../models/deaths";

@Injectable({
  providedIn: 'root'
})
export class ApiGrabService {

  apiUrlGeneral: string = 'https://api.corona-zahlen.org/germany'
  apiUrlCases: string = 'https://api.corona-zahlen.org/germany/history/cases'
  apiUrlDeaths: string= 'https://api.corona-zahlen.org/germany/history/deaths'

  private http: HttpClient = inject(HttpClient)

  getGeneralData(): Observable<GeneralData> {
    return this.http.get<any>(`${this.apiUrlGeneral}`)
  }

  getCasesData(): Observable<CasesData> {
    return this.http.get<any>(`${this.apiUrlCases}`)
  }

  getDeaths(): Observable<DeathsData> {
    return this.http.get<any>(`${this.apiUrlDeaths}`)
  }
}
