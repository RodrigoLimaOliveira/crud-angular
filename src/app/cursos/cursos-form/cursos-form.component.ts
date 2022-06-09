import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css'],
})
export class CursosFormComponent implements OnInit {
  form: FormGroup;
  optionsCategory = [
    { label: '' },
    { label: 'Front-end', value: 'front-end' },
    { label: 'Back-end', value: 'back-end' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private messageService: MessageService,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.cursosService.save(this.form.value).subscribe({
      next: (data) => { this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Curso cadastrado com sucesso'}), this.location.back() },
      error: () => this.messageService.add({severity:'error', summary:'Erro!', detail:'Algo deu errado!'})
    });
  }

  onCancel() {
    this.location.back();
  }
}
