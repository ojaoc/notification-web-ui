import { Component, OnInit } from '@angular/core';
import { ViewDirective } from 'src/app/shared/components/directives/view/view.directive';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.scss'],
})
export class KanbanViewComponent extends ViewDirective implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
