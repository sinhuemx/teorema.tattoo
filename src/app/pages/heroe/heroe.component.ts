import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { HeroeModel } from "../../models/heroe.model";
import { HeroesService } from "../../services/heroes.service";

import Swal from "sweetalert2";

interface Estilo {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"]
})
export class HeroeComponent implements OnInit {
  title: string;
  nombreCompleto: string;
  estilo: string;
  great: string;
  needTherapy: string;
  state: string;
  heroe: HeroeModel = new HeroeModel();

  foods: Estilo[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {
    this.title = "Agregar Cita";
    this.state = "Status";
    this.nombreCompleto = "Nombre Completo";
    this.estilo = "Estilo";
    this.great = "Reservado";
    this.needTherapy = "No Confirmado";
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== "nuevo") {
      this.heroesService.getHeroe(id).subscribe((resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      title: "Un Segundo...",
      text: "Adelante!",
      type: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesService.updateHeroe(this.heroe);
    } else {
      peticion = this.heroesService.createHeroe(this.heroe);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.patient,
        text: "Registro Correcto!",
        type: "success"
      });
    });
  }
}
