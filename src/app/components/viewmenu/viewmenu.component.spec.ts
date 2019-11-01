import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmenuComponent } from './viewmenu.component';

describe('ViewmenuComponent', () => {
  let component: ViewmenuComponent;
  let fixture: ComponentFixture<ViewmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
