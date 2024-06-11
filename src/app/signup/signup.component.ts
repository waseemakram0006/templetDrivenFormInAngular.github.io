import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log('Form Submitted!', signupForm.value);
    }
  }

}
