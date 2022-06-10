
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
    // open modal with returned message
    const body = {
      email: this.formLogin.value["email"],
      password: this.formLogin.value["password"]
    }

    this.httpService.authenticate(body).subscribe((data) => {
      console.log(data);
    });

    console.log(this.formLogin)
    this.formLogin.reset();
  }
}
