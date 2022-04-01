import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIndexPageComponent } from './tasks-index-page.component';

describe('TasksIndexPageComponent', () => {
  let component: TasksIndexPageComponent;
  let fixture: ComponentFixture<TasksIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksIndexPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
