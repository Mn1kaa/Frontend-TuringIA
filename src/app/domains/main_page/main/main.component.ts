import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { NgIf,NgFor } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports:[MatCardModule,NgIf,NgFor]
})
export class MainComponent {
  boolean_computadora:Boolean=false
  boolean_celulares:Boolean=false
  boolean_tablets:Boolean=false

  img_computadora:string="assets/pc.jpg"
  img_celular:string="assets/celular.jpg"
  img_tablet:string="assets/tablet.jpg"


  array_computadoras_api: Array<any>=[{}]
  array_celulares_api: Array<any>=[{}]
  array_tablets_api: Array<any>=[{}]




  constructor(private apiService:DataService){}




getComputadoras(){

  this.apiService.traerListaComputadoras().then(data=>
    {
    this.array_computadoras_api=data
    ,this.boolean_computadora=true
    ,this.boolean_celulares=false
    ,this.boolean_tablets=false}
  )




}
getCelulares(){

  this.apiService.traerListCelulares().then(data=>
    {
    this.array_celulares_api=data
    ,this.boolean_celulares=true
    ,this.boolean_computadora=false
    ,this.boolean_tablets=false}
  )


}
getTablets(){

  this.apiService.traerListTablets().then(data=>
    {
    this.array_tablets_api=data
    ,this.boolean_celulares=false
    ,this.boolean_computadora=false
    ,this.boolean_tablets=true})



}


}
