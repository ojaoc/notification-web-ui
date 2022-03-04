import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CheckboxData {
  title: string;
}

@Component({
  selector: 'app-filter-table-modal',
  templateUrl: './filter-table-modal.component.html',
})
export class FilterTableComponent implements OnInit {
  @Input() innerFilterData!: Map<string, boolean>;

  @Input() isVisible: boolean;

  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() onFilterConfirm: EventEmitter<Map<string, boolean>> =
    new EventEmitter();

  constructor() {
    this.isVisible = false;
  }

  ngOnInit(): void {}

  handleConfirm() {
    this.isVisible = false;

    this.isVisibleChange.emit(this.isVisible);
    this.onFilterConfirm.emit(this.innerFilterData);
  }

  handleCancel() {
    this.isVisible = false;

    this.isVisibleChange.emit(this.isVisible);
  }
}
