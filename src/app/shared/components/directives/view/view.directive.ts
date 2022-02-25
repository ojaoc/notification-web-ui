import { Directive, Input } from '@angular/core';
import { Data } from 'src/app/core/models/data';

@Directive({
  selector: '[]',
})
export class ViewDirective {
  @Input() data!: Data;

  constructor() {}
}
