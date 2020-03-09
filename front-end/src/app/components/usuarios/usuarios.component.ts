import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(public usuariosService: UsuariosService) {
    usuariosService.obtenerUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  ngOnInit() {}
}
