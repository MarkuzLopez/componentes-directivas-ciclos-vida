import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
   // el.nativeElement.style.backgroundColor = 'yellow';
  }
  // @HostListener('mouseenter') mouseEntro() {
  //   this.el.nativeElement.style.background = 'red';
  // }
  // @HostListener('mouseleave') mousseSalio() {
  //   this.el.nativeElement.style.background = null;
  // }
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar( color: string) {
    this.el.nativeElement.style.background = color;
  }
}
