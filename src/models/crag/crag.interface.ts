import { Area } from '../area/area.interface';
import { BaseType } from "../baseType/baseType.interface";

export interface Crag extends BaseType {
    area: Area;
    name: string;
    image: string;
    facing: string;
    access: string;
    info: string;
}