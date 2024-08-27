import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
  standalone: true
})
export class PasswordStrengthDirective implements OnChanges {
  @Input() password: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateElementColor();
  }

  private updateElementColor() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    let color = 'gray';

    if (length === 0) {
      color = 'gray';
    } else if (length < 8) {
      color = 'red';
    } else if (
      (hasLetters && !hasNumbers && !hasSymbols) ||
      (!hasLetters && hasNumbers && !hasSymbols) ||
      (!hasLetters && !hasNumbers && hasSymbols)
    ) {
      color = 'red';
    } else if (
      (hasLetters && hasNumbers && !hasSymbols) ||
      (hasLetters && !hasNumbers && hasSymbols) ||
      (!hasLetters && hasNumbers && hasSymbols)
    ) {
      color = 'yellow';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      color = 'green';
    }

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
