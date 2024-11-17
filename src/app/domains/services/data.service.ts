import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }



  async  traerListaComputadoras(){
    const urlApi= `http://127.0.0.1:8000/computadora_get`
    let llamado=await fetch(urlApi,
      {
      method: "GET", // or 'PUT'
      headers:
      {
        "Content-Type": "application/json",
      },

      // data can be `string` or {object}!
      })

    let arreglo_grupos= await llamado.json()

    return arreglo_grupos
  }

  async  traerListCelulares(){
    const urlApi= `http://127.0.0.1:8000/celular_get`
    let llamado=await fetch(urlApi,
      {
      method: "GET", // or 'PUT'
      headers:
      {
        "Content-Type": "application/json",
      },

      // data can be `string` or {object}!
      })

    let arreglo_grupos= await llamado.json()

    return arreglo_grupos
  }

  async  traerListTablets(){
    const urlApi= `http://127.0.0.1:8000/tablet_get`
    let llamado=await fetch(urlApi,
      {
      method: "GET", // or 'PUT'
      headers:
      {
        "Content-Type": "application/json",
      },

      // data can be `string` or {object}!
      })

    let arreglo_grupos= await llamado.json()

    return arreglo_grupos
  }




}
