
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from './http.service';
import { LoginRequestModel } from './model/login-request.model';

@Component({
  selector: 'tf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Techno Fit';
  showModal = false;
  modalText = '';

  formLogin = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {
    // try using cubic-bezier formula for the checkbox checked state
  }

  onSubmit() {
    const body = {
      email: this.formLogin.value["email"],
      password: this.formLogin.value["password"]
    }

    this.httpService.authenticate(body).subscribe((data) => {
      this.showModal = true;
      this.modalText = "Login Sucessful";
    },
      error => {
        this.showModal = true;
        this.modalText = error.error.error; // ????
      });

    console.log(this.formLogin)
    this.formLogin.reset();
  }

  closeModal() {
    this.showModal = false;
  }
}
