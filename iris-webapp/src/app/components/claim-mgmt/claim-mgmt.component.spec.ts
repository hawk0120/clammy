import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimMgmtComponent } from './claim-mgmt.component';

describe('ClaimMgmtComponent', () => {
  let component: ClaimMgmtComponent;
  let fixture: ComponentFixture<ClaimMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimMgmtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
