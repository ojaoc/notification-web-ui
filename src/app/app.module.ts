import { DragDropModule } from '@angular/cdk/drag-drop';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_I18N, pt_PT } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AppComponent } from './app.component';
import { AbstractBoardComponent } from './core/components/andon-board/abstract-board/abstract-board.component';
import { AndonBoardComponent } from './core/components/andon-board/andon-board.component';
import { KanbanViewComponent } from './core/components/andon-board/kanban-view/kanban-view.component';
import { TableViewComponent } from './core/components/andon-board/table-view/table-view.component';
import { ViewDirective } from './shared/components/directives/view/view.directive';
import { FilterTableComponent } from './shared/components/filter-table-modal/filter-table-modal.component';
import { TableComponent } from './shared/components/table/table.component';
import { PaginationPipe } from './shared/pipes/pagination/pagination.pipe';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    AndonBoardComponent,
    AbstractBoardComponent,
    TableViewComponent,
    KanbanViewComponent,
    TableComponent,
    FilterTableComponent,
    PaginationPipe,
    ViewDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzListModule,
    DragDropModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzGridModule,
    NzIconModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_PT }],
  bootstrap: [AppComponent],
})
export class AppModule {}
