import { CdkDragSortEvent, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Data } from 'src/app/core/models/data';
import { FilterTableComponent } from './filter-table-modal/filter-table-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  innerFilterData: Map<string, boolean>;

  @ViewChild(FilterTableComponent) filterTableComponent!: FilterTableComponent;

  @Input() data: Data;
  @Input() editableData!: Data;
  @Input() isEditingBoard: boolean;

  @Output() onEditEnable: EventEmitter<void>;
  @Output() onDiscardChanges: EventEmitter<void>;
  @Output() onSaveChanges: EventEmitter<void>;

  page: number;
  size: number;
  isVisible: boolean;
  checked: boolean;

  constructor() {
    this.data = { columns: [], data: [] };
    this.page = 1;
    this.size = 10;
    this.isVisible = false;
    this.checked = true;
    this.isEditingBoard = false;
    this.onEditEnable = new EventEmitter();
    this.onDiscardChanges = new EventEmitter();
    this.onSaveChanges = new EventEmitter();
    this.innerFilterData = new Map<string, boolean>();
  }

  showModal(): void {
    this.isVisible = true;
  }

  ngOnInit(): void {}

  ngOnChanges({ editableData }: SimpleChanges): void {
    if (editableData?.currentValue) {
      this.editableData.columns.forEach((elem) => {
        this.innerFilterData.set(elem.title, elem.checked ?? true);
      });
    }
  }

  reorderCol(
    event: CdkDragSortEvent<
      { name: string; title: string; checked?: boolean }[]
    >
  ) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  changePage(newPage: number) {
    this.page = newPage;
  }

  changeSize(newSize: number) {
    this.size = newSize;
  }

  setColumnsFilter(newFilterData: Map<string, boolean>) {
    this.editableData.columns = this.editableData.columns.map((column) => ({
      ...column,
      checked: newFilterData.get(column.title),
    }));
  }
}
