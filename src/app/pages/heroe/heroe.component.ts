import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { HeroeModel } from "../../models/heroe.model";
import { HeroesService } from "../../services/heroes.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"]
})
export class HeroeComponent implements OnInit {
  title: string;
  firstName: string;
  lastName: string;
  great: string;
  needTherapy: string;
  state: string;
  heroe: HeroeModel = new HeroeModel();

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {
    this.title = "Add Patient";
    this.state = "State";
    this.firstName = "First Name";
    this.lastName = "Last Name";
    this.great = "Great!";
    this.needTherapy = "Need Therapy";
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
      title: "Wait",
      text: "Go Ahead!",
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
        text: "it was done successfully",
        type: "success"
      });
    });
  }
}
