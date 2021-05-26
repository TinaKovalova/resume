import { Injectable } from '@angular/core';
import {WorkExperience} from "../WorkExperience";
import {WORK_EXPERIENCES} from "../WORK_EXPERIENCES";
import {Observable,of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }
  getWorkExperiences():Observable<WorkExperience[]>{
    return of(WORK_EXPERIENCES)
  }
}
