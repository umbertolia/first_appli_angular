import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinconnueComponent } from './pageinconnue.component';

describe('PageinconnueComponent', () => {
  let component: PageinconnueComponent;
  let fixture: ComponentFixture<PageinconnueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageinconnueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageinconnueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
