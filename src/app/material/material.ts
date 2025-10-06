import { Component } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module-module';

@Component({
  selector: 'app-material',
  imports: [MaterialModuleModule],
  templateUrl: './material.html',
  styleUrl: './material.css'
})
export class Material {

}
