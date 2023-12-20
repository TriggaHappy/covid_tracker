export interface GeneralData {
  cases: number
  deaths: number
  recovered: number
  weekIncidence: number
  casesPer100k: number
  casesPerWeek: number
  delta: Delta
  r: R
  hospitalization: Hospitalization
  meta: Meta
}

export interface Delta {
  cases: number
  deaths: number
  recovered: number
  weekIncidence: number
}

export interface R {
  value: number
  rValue4Days: RValue4Days
  rValue7Days: RValue7Days
  lastUpdate: string
}

export interface RValue4Days {
  value: number
  date: string
}

export interface RValue7Days {
  value: number
  date: string
}

export interface Hospitalization {
  cases7Days: number
  incidence7Days: number
  date: string
  lastUpdate: string
}

export interface Meta {
  source: string
  contact: string
  info: string
  lastUpdate: string
  lastCheckedForUpdate: string
}
