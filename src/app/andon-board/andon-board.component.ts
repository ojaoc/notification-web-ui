import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andon-board',
  templateUrl: './andon-board.component.html',
  styleUrls: ['./andon-board.component.scss'],
})
export class AndonBoardComponent implements OnInit {
  dataSet: any;

  constructor() {
    this.dataSet = { type: 'Table' };
  }

  ngOnInit(): void {}
}
