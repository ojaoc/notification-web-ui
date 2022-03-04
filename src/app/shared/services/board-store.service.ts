import { Injectable } from '@angular/core';
import cloneDeep from 'lodash.clonedeep';
import { Data } from 'src/app/core/models/data';

@Injectable({
  providedIn: 'root',
})
export class BoardStoreService {
  boardData: Data;

  editableBoardData: Data;

  boardConfig: { type: string };

  isEditingBoard: boolean;

  constructor() {
    this.boardData = {
      columns: [],
      data: [],
    };

    this.editableBoardData = {
      columns: [],
      data: [],
    };

    this.boardConfig = {
      type: 'table',
    };

    this.isEditingBoard = false;
  }

  enableEdit() {
    this.isEditingBoard = true;
    this.editableBoardData = cloneDeep(this.boardData);
  }

  discardChanges() {
    this.isEditingBoard = false;
  }

  saveChanges() {
    this.isEditingBoard = false;
    this.boardData = cloneDeep(this.editableBoardData);
  }
}
