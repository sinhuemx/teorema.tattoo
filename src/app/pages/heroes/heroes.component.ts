import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { HeroeModel } from "../../models/heroe.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  cargando = false;
  title: string;
  firstName: string;
  lastName: string;
  therapy: string;
  actions: string;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
      this.cargando = false;
      this.title = "Patients";
      this.firstName = "Patients";
      this.lastName = "Patients";
      this.therapy = "Therapy";
      this.actions = "Patients";
    });
  }

  deleteHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: "Really!",
      text: `would you like delete ${heroe.patient}`,
      type: "question",
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
