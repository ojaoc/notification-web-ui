import { Component, OnInit } from '@angular/core';
import { ViewDirective } from 'src/app/shared/components/directives/view/view.directive';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent extends ViewDirective implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
