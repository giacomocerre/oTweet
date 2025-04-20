import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetspageComponent } from './tweetspage.component';

describe('TweetspageComponent', () => {
  let component: TweetspageComponent;
  let fixture: ComponentFixture<TweetspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
