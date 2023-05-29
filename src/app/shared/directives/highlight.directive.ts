import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@HostBinding('style.background-color') bgColor: String = 'white'
@HostBinding('style.color') color: String = 'black'
@HostBinding('style.border') border: String = '1px solid #eee'
@HostListener('mouseover')
 onMouseOver () {
  this.bgColor = 'orange'
  this.color = 'white'
  this.border = '1px solid yellow'
}
@HostListener('mouseout')
onMouseOut () {
  this.bgColor = 'white'
  this.color = 'black'
  this.border = '1px solid #eee'
}

}
