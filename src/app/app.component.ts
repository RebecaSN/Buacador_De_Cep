import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import { CEP } from './Interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Find CEP'
  cep: string=''
  
  constructor(
    public dialog: MatDialog,
    private http : HttpClient
    
  ){}

  CEPtoFind:FormControl=new FormControl('',
  [Validators.required, Validators.minLength(8), 
  Validators.maxLength(8), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) 

  openDialog(): void {
   let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'my-class'
     }) 
     dialogRef.componentInstance.cep=this.CEPtoFind.value
   }

}
