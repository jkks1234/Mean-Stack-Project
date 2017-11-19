import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyarticlesComponent } from './myarticles.component';

describe('MyarticlesComponent', () => {
  let component: MyarticlesComponent;
  let fixture: ComponentFixture<MyarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
