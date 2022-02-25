import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractBoardComponent } from './andon-board/abstract-board/abstract-board.component';
import { AndonBoardComponent } from './andon-board/andon-board.component';
import { KanbanViewComponent } from './andon-board/kanban-view/kanban-view.component';
import { TableViewComponent } from './andon-board/table-view/table-view.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AndonBoardComponent,
    AbstractBoardComponent,
    TableViewComponent,
    KanbanViewComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
