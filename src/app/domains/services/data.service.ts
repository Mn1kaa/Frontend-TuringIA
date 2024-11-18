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

  async  registrarComputadora(registroComputadora:any){
    const urlApi= `http://127.0.0.1:8000/computadora_post`
    let llamado=await fetch(urlApi,
      {
      method: "POST", // or 'PUT'
      headers:
      {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(registroComputadora)

      // data can be `string` or {object}!
      })
    if(llamado.status==422){
      throw new Error("Ingresa Datos en  los formularios")
    }
    let mensage= await llamado.json()
    console.log(mensage)

    return mensage
  }

  async  actualizarComputadora(id: number, data:any ) {
    const url = `http://127.0.0.1:8000/computadora_put${id}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar la computadora: ${response.statusText}`);
    }

    const updatedPC = await response.json();
    return updatedPC;
  }




















  async  eliminarComputadora(computadora_id:number){
    const urlApi= `http://127.0.0.1:8000/computadora_delete`
    let llamado=await fetch(urlApi,
      {
      method: "DELETE", // or 'PUT'
      headers:
      {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(computadora_id)

      // data can be `string` or {object}!
      })
      if(llamado.status==422){
        throw new Error("No se pudo eliminar el grupo")
      }
    console.log(llamado)
    let mensage= await llamado.json()

    return mensage
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
