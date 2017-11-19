import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoneComponent } from './listone.component';

describe('ListoneComponent', () => {
  let component: ListoneComponent;
  let fixture: ComponentFixture<ListoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
