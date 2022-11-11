import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextProductComponent } from './next-product.component';

describe('NextProductComponent', () => {
  let component: NextProductComponent;
  let fixture: ComponentFixture<NextProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
