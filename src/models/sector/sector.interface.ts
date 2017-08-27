import { Crag } from '../crag/crag.interface';
import { BaseType } from "../baseType/baseType.interface";

export interface Sector  extends BaseType{
    crag:Crag;
    name:string;
    facing:string;
    image:string;
}