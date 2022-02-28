import { Component, OnInit } from '@angular/core';
import { BoardStoreService } from 'src/app/shared/services/board-store.service';
import { dataset } from '../../mocks/dataset';

@Component({
  selector: 'app-andon-board',
  templateUrl: './andon-board.component.html',
  styleUrls: ['./andon-board.component.scss'],
})
export class AndonBoardComponent implements OnInit {
  constructor(public boardStore: BoardStoreService) {
    boardStore.boardConfig = { type: 'Table' };
    boardStore.boardData = dataset;
  }

  ngOnInit(): void {}
}
