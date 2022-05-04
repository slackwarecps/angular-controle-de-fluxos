import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais$!: Observable<Animais>;

  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService) {}

  ngOnInit(): void {
    console.log('entrou no init....');
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        console.log('passou no switchMap ...');
        console.log(usuario);

        const userName = usuario.name ?? '';

        console.log(userName);
        return this.animaisService.listaDoUsuario(userName);
      })
    );
  }
}
