import { Component } from '@angular/core';
import { TechsComponent } from './techs/techs.component';

@Component({
  selector: 'app-skills',
  imports: [TechsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
