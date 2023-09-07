import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCardsComponent } from './java-cards.component';

describe('JavaCardsComponent', () => {
  let component: JavaCardsComponent;
  let fixture: ComponentFixture<JavaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
