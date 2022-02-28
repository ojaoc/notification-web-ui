import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from 'src/app/core/models/data';

@Injectable({
  providedIn: 'root',
})
export class BoardStoreService {
  private readonly _boardData = new BehaviorSubject<Data>({
    columns: [],
    data: [],
  });

  private readonly _boardConfig = new BehaviorSubject<{ type: string }>({
    type: 'table',
  });

  private readonly _isEditingBoard = new BehaviorSubject<boolean>(false);

  readonly boardData$ = this._boardData.asObservable();
  readonly boardConfig$ = this._boardConfig.asObservable();
  readonly isEditingBoard$ = this._isEditingBoard.asObservable();

  get boardData(): Data {
    return this._boardData.getValue();
  }

  set boardData(data: Data) {
    this._boardData.next(data);
  }

  get boardConfig(): { type: string } {
    return this._boardConfig.getValue();
  }

  set boardConfig(config: { type: string }) {
    this._boardConfig.next(config);
  }

  get isEditingBoard(): boolean {
    return this._isEditingBoard.getValue();
  }

  private set isEditingBoard(isEditing: boolean) {
    this._isEditingBoard.next(isEditing);
  }

  enableEdit() {
    this.isEditingBoard = true;
  }

  disableEdit() {
    this.isEditingBoard = false;
  }

  constructor() {}
}
