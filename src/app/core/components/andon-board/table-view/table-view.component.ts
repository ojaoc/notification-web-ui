import { Component, OnInit } from '@angular/core';
import { ViewDirective } from 'src/app/shared/components/directives/view/view.directive';
import { BoardStoreService } from 'src/app/shared/services/board-store.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent extends ViewDirective implements OnInit {
  constructor(public boardStore: BoardStoreService) {
    super();
  }

  ngOnInit(): void {}
}
