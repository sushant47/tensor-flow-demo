import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLoaderComponent } from './material-loader.component';

describe('MaterialLoaderComponent', () => {
  let component: MaterialLoaderComponent;
  let fixture: ComponentFixture<MaterialLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
