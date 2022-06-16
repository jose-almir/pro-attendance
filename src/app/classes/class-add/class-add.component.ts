import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, Validators } from '@angular/forms';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss'],
})
export class ClassAddComponent implements OnInit {
  faAdd = faAdd;
  faMinus = faMinus;

  addClassForm = this.fb.group({
    alunos: this.fb.array([['', Validators.required]]),
  });

  constructor(private fb: FormBuilder) {}

  get alunos(): FormArray {
    return this.addClassForm.get('alunos') as FormArray;
  }

  newAluno() {
    this.alunos.push(this.fb.control('', Validators.required));
    console.log(this.addClassForm.value);
  }

  removeAluno(i: number) {
    this.alunos.removeAt(i);
  }

  ngOnInit(): void {}
}
