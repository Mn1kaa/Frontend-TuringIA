import { Component,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,FormGroup,FormControl, Validators,FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { DataService } from '../services/data.service';
import { NgIf ,NgFor} from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone:true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatDividerModule,ReactiveFormsModule,NgIf,NgFor],


})
export class AdminComponent implements OnInit {
  mensage:string=''
  formComputadoras: FormGroup;
  deleteCtrl:FormControl=new FormControl()
  booleanComputadoras:boolean=false
  arrayComputadoras:any=[{}]
  datosRegistroComputadora={'marca':'',
    'descripcion':'',
    'memoria_ram':'',
    'almacenamiento':'',
    'sistema_operativo':''
  }

  constructor(private fb: FormBuilder,private apiService:DataService) {
    this.formComputadoras = this.fb.group({
      marca: ['', Validators.required],
      descripcion: ['', Validators.required],
      memoria_ram: ['', Validators.required],
      almacenamiento: ['', Validators.required],
      sistema_operativo: ['', Validators.required]
    });
  }

    ngOnInit(): void {


      };

      verComputadoras(){

        this.apiService.traerListaComputadoras().then(data=>this.arrayComputadoras=data)
        this.booleanComputadoras=true

      }
      crearComputadora(){
        this.datosRegistroComputadora.marca=this.formComputadoras.get('marca')?.value
        this.datosRegistroComputadora.descripcion=this.formComputadoras.get('descripcion')?.value
        this.datosRegistroComputadora.memoria_ram=this.formComputadoras.get('memoria_ram')?.value
        this.datosRegistroComputadora.almacenamiento=this.formComputadoras.get('almacenamiento')?.value
        this.datosRegistroComputadora.sistema_operativo=this.formComputadoras.get('sistema_operativo')?.value

        this.apiService.registrarComputadora(this.datosRegistroComputadora).then(data=>this.mensage=data.message)
        this.formComputadoras.reset()


            }
      editarComputadora(){
        this.datosRegistroComputadora.marca=this.formComputadoras.get('marca')?.value
        this.datosRegistroComputadora.descripcion=this.formComputadoras.get('descripcion')?.value
        this.datosRegistroComputadora.memoria_ram=this.formComputadoras.get('memoria_ram')?.value
        this.datosRegistroComputadora.almacenamiento=this.formComputadoras.get('almacenamiento')?.value
        this.datosRegistroComputadora.sistema_operativo=this.formComputadoras.get('sistema_operativo')?.value
        this.apiService.actualizarComputadora(this.deleteCtrl.value,this.datosRegistroComputadora).then(data=>this.mensage=data.mensaje)
        this.formComputadoras.reset()



      }
      eliminarComputadora(){
        this.apiService.eliminarComputadora(this.deleteCtrl.value).then(data=>this.mensage=data.message)



      }

    }











