import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  password: string = '';
  firstSectionClass: string = 'section-gray';
  secondSectionClass: string = 'section-gray';
  thirdSectionClass: string = 'section-gray';

  checkPasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (length === 0) {
      this.setClasses('section-gray', 'section-gray', 'section-gray');
    } else if (length < 8) {
      this.setClasses('section-red', 'section-red', 'section-red')
    } else if (
      (hasLetters && !hasNumbers && !hasSymbols) ||
      (!hasLetters && hasNumbers && !hasSymbols) ||
      (!hasLetters && !hasNumbers && hasSymbols)
    ) {
      this.setClasses('section-red', 'section-gray', 'section-gray');
    } else if (
      (hasLetters && hasNumbers && !hasSymbols) ||
      (hasLetters && !hasNumbers && hasSymbols) ||
      (!hasLetters && hasNumbers && hasSymbols)
    ) {
      this.setClasses('section-yellow', 'section-yellow', 'section-gray')
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.setClasses('section-green', 'section-green', 'section-green')
    }
  }

  setClasses(first: string, second: string, third: string) {
    this.firstSectionClass = first;
    this.secondSectionClass = second;
    this.thirdSectionClass = third;
  }
}
