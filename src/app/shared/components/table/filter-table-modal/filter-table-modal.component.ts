import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filter-table-modal',
  templateUrl: './filter-table-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTableComponent implements OnInit {
  innerFilterData: any;

  @Input() filterData: any;
  @Input() isVisible: boolean;

  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() filterDataChange: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.isVisible = false;
    this.innerFilterData = { columns: [], data: [] };
    this.filterData = { columns: [], data: [] };
  }

  ngOnInit(): void {
    this.bootstrapComponent();
  }

  async handleConfirm(): Promise<void> {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);

    this.filterDataChange.emit(this.innerFilterData);

    await this.delay(350);

    this.bootstrapComponent();
  }

  async handleCancel(): Promise<void> {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);

    await this.delay(350);

    this.bootstrapComponent();
  }

  bootstrapComponent() {
    this.innerFilterData = JSON.parse(JSON.stringify(this.filterData));
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
