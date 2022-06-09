import { CursosService } from './../services/cursos.service';
import { Curso } from './../models/curso.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.list().subscribe({
      next: (res) => this.cursos = res,
      error: (e) => console.log(e)
    })
  }

  onCreate() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
