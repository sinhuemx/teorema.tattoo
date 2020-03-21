
import { HeroesService } from "../../services/heroes.service";
import { HeroeModel } from "../../models/heroe.model";
import Swal from "sweetalert2";

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';






@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  heroes: HeroeModel[] = [];
  cargando = false;
  title: string;
  nombreCompleto: string;
  lastName: string;
  therapy: string;
  actions: string;



  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
      this.cargando = false;
      this.title = "teorema.tattoo";
      this.nombreCompleto = "Nombre Completo";
      this.lastName = "Estilo";
      this.therapy = "Status";
      this.actions = "Acciones";
    });
  }

  deleteHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: "Seguro!?",
      text: `Quieres hacer esto? ${heroe.patient}`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this.heroesService.deleteHeroe(heroe.id).subscribe();
      }
    });
  }
}
