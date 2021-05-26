import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonInfoComponent } from './person-info/person-info.component';
import { WorkExperieceComponent } from './work-experiece/work-experiece.component';
import { PersonSkillsComponent } from './person-skills/person-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoComponent,
    WorkExperieceComponent,
    PersonSkillsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
