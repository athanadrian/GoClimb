import { BaseType } from "../baseType/baseType.interface";
import { User } from "../user/user.interface";
import { Route } from "../route/route.interface";
import { Crag } from "../crag/crag.interface";
import { Sector } from "../sector/sector.interface";

export interface Climb extends BaseType{
    user:User;
    crag:Crag;
    sector:Sector;
    route:Route;
    dateClimbled:Date;
    attempt:AttemptStatus;
}

export enum AttemptStatus{
    flash,
    onSight,
    redPoint
}