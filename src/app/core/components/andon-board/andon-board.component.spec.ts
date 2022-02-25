import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndonBoardComponent } from './andon-board.component';

describe('AndonBoardComponent', () => {
  let component: AndonBoardComponent;
  let fixture: ComponentFixture<AndonBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndonBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndonBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
