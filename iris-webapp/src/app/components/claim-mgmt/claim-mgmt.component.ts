// claim-mgmt.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ClaimService} from '../../services/claim-service.service';

@Component({
  selector: 'app-claim-mgmt',
  templateUrl: './claim-mgmt.component.html',
  styleUrls: ['./claim-mgmt.component.css']
})
export class ClaimMgmtComponent implements OnInit {
  claimForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private claimService: ClaimService) {
    this.claimForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.claimForm.valid) {
      const { title, description } = this.claimForm.value;
      this.claimService.createClaim(title, description).subscribe(
        () => {
        
				          this.message = response.message;

				console.log('Claim created successfully');
          this.claimForm.reset();
        },
        error => {
          console.error('Error creating claim:', error);
        this.message = 'Error creating claim';

				}
      );
    }
  }

  onDelete(id: number): void {
    this.claimService.deleteClaim(id).subscribe(
      () => {
        console.log('Claim deleted successfully');
				          this.message = response.message;

			},
      error => {
        console.error('Error deleting claim:', error);
        this.message = 'Error deleting claim';

			}
    );
  }
}

