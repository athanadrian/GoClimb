import { Sector } from '../sector/sector.interface';
import { BaseType } from '../baseType/baseType.interface';

export interface Route extends BaseType{
    sector: Sector;
    routeNo: string;
    name: string;
    height: number;
    quickdraws: number;
    grade: string;
    type: RouteType;
    makers: string;
    info: string;
}

export enum RouteType {
    Sport,
    Trad,
    Mix
}
