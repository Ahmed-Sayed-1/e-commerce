import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formValues = {
    email: '',
    password: ''
  }
  constructor(private router: Router){}
  handleFormSubmit(form: any){
   console.log(form)
   console.log(form.value)

  }
  handleRedirect() {
    this.router.navigate(['/home'])}
}
