import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCustomComponent } from './title-custom.component';

describe('TitleCustomComponent', () => {
  let component: TitleCustomComponent;
  let fixture: ComponentFixture<TitleCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
