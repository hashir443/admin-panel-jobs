import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPromptComponent } from './error-prompt.component';

describe('ErrorPromptComponent', () => {
  let component: ErrorPromptComponent;
  let fixture: ComponentFixture<ErrorPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
