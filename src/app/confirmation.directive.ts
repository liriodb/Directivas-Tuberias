import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmation]'
})

export class ConfirmationDirective {
  @Input('confirm') execFunction: Function;
  
  @HostListener('click', ['$event'])
  onclick(){
    const confirmed = window.confirm('¿Estas seguro de querer guardar?')

    if(confirmed){
      this.execFunction();
    }
  }
}
