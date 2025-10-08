import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Dialog } from '../dialog/dialog';
import {MatChipsModule} from '@angular/material/chips';
import{MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-material',
  imports: [MatButtonModule,MatIconModule,MatChipsModule,MatFormFieldModule],
  templateUrl: './material.html',
  styleUrl: './material.css'
})
export class Material {
  dailog = inject(MatDialog);

  checkout(){
    this.dailog.open(Dialog, {
      data:{content: " Do you want to checkout or continue shopping? ", options:["Checkout", " Continue shopping"] }
    })
  }
  shop(){
    this.dailog.open(Dialog, {
      data:{content: " Welcome to exclusive shop? ", options:["Home", " Continue shopping"] }
    })
  }
}
