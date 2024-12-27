import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitableForComponent } from './suitable-for.component';

describe('SuitableForComponent', () => {
  let component: SuitableForComponent;
  let fixture: ComponentFixture<SuitableForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuitableForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitableForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
