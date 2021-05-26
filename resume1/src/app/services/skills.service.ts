import { Injectable } from '@angular/core';
import {Skills} from "../Skills";
import {Observable,of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillsService{

  getSkills():Observable<string[]>{
    return of(Skills)
  }
}
