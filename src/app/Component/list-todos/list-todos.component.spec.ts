import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTODOsComponent } from './list-todos.component';

describe('ListTODOsComponent', () => {
  let component: ListTODOsComponent;
  let fixture: ComponentFixture<ListTODOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTODOsComponent]
    });
    fixture = TestBed.createComponent(ListTODOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
