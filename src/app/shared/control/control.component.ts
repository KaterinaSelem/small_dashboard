import { Component, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
   class: 'control',   // properties of my host element
   '(click)': 'onClick()', // event listener
  }
})
export class ControlComponent {
  // @HostListener('click') onClick() {
  //   console.log('clicked!');
  // }
   label = input.required<string>();
   private el = inject(ElementRef); 
   @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
   

   onClick() {
    console.log('clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
