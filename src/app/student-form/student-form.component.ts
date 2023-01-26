import { Component } from '@angular/core';

interface IStudent {
  name: string;
  surname: string;
  poblacion: string;
  provincia: string;
  sex: string;
  birthday: Date;
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  student: IStudent = {
    name: "",
    surname: "",
    poblacion: "",
    provincia: "",
    sex: "",
    birthday: new Date()
  };
  constructor() {}
  submit() {
    // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
    console.log("Student Data");
    console.log(this.student.name);
    console.log(this.student.surname);
    console.log(this.student.poblacion);
    console.log(this.student.provincia);
    console.log(this.student.sex);
    console.log(new Date(this.student.birthday).toLocaleDateString());
    let timeDiff = Math.abs(Date.now() - new Date(this.student.birthday).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    console.log(age)
  }
}
