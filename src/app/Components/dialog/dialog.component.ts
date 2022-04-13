import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CEP } from 'src/app/Interface/interface';
import { ServiçoService } from 'src/app/Service/serviço.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  cep=''
  CepOfUser: CEP | null = null

  constructor(
    public dialogRef: MatDialogRef <DialogComponent>,
    private cepServices:ServiçoService
  ) { }

  ngOnInit(): void {
    this.cepServices.findCep(this.cep).subscribe(
     (cepU)=>{
      this.CepOfUser=cepU 
      }
    )
  }

}
