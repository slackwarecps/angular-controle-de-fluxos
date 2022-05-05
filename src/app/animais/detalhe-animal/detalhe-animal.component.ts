import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalid!: number;
  animal$!: Observable<Animal>;

  constructor(private animaisService: AnimaisService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.animalid = this.activatedRoute.snapshot.params.animalid;
    this.animal$ = this.animaisService.buscaPorId(this.animalid);
  }
}
