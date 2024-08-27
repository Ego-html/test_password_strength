import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {PasswordStrengthDirective} from "../password-strength.directive";

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    PasswordStrengthDirective
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  password: string = '';
}
