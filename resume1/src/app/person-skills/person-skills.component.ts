import { Component, OnInit } from '@angular/core';
import {Skills} from "../Skills";
import {SkillsService} from "../services/skills.service";

@Component({
  selector: 'app-person-skills',
  templateUrl: './person-skills.component.html',
  styleUrls: ['./person-skills.component.css']
})
export class PersonSkillsComponent implements OnInit {
  skills?:string[]
  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
    this.getSkills()
  }
  getSkills():void {
    this.skillsService.getSkills()
      .subscribe(skill=>this.skills=skill)
  }

}
