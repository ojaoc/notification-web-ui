import { Component, OnInit } from '@angular/core';
import { dataset } from '../../mocks/dataset';
import { Data } from '../../models/data';

@Component({
  selector: 'app-andon-board',
  templateUrl: './andon-board.component.html',
  styleUrls: ['./andon-board.component.scss'],
})
export class AndonBoardComponent implements OnInit {
  data: Data;
  config: any;

  constructor() {
    this.data = dataset;
    this.config = { type: 'Table' };
  }

  ngOnInit(): void {}
}
