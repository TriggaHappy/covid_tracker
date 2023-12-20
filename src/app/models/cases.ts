import {Meta} from "./general-data";

export interface CasesData {
    data: Array<CasesItems>,
    meta: Meta
}

export interface CasesItems {
    cases: number,
    date: string
}
