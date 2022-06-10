export class LoginRequestModel {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = '';
    this.password = '';
  }
}