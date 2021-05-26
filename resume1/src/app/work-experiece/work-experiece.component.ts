import { Component, OnInit } from '@angular/core';
import {WorkExperience} from "../WorkExperience";
import {WORK_EXPERIENCES} from "../WORK_EXPERIENCES";
import {WorkExperienceService} from "../services/work-experience.service";


@Component({
  selector: 'app-work-experiece',
  templateUrl: './work-experiece.component.html',
  styleUrls: ['./work-experiece.component.css']
})
export class WorkExperieceComponent implements OnInit {

  experiences?:WorkExperience[]

  constructor(private workExperienceService:WorkExperienceService) {}

  ngOnInit(): void {
    this.getWorkExperience()
  }
  getWorkExperience():void{
    this.workExperienceService
      .getWorkExperiences().subscribe(we=>this.experiences=we)
  }

}
