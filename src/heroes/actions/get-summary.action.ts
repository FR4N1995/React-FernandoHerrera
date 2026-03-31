import { heroapi } from "../api/hero.api"
import type { SumaryInformationResponse } from "../types/summary-information.response";

export const getSummary = async() =>{
    const {data} = await heroapi.get<SumaryInformationResponse>('/summary');


    return data;
}