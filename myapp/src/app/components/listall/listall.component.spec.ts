import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallComponent } from './listall.component';

describe('ListallComponent', () => {
  let component: ListallComponent;
  let fixture: ComponentFixture<ListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
