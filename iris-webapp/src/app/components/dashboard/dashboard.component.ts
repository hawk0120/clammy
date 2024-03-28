import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { Claim } from '../../model/claim.interface';
import { ClaimService } from '../../services/claim-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, Observable],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  claims: Claim[] = [];

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.fetchClaims();
  }

  fetchClaims(): void {
    this.claimService.getClaims().subscribe(
      (claims) => {
        this.claims = claims;
      },
      (error) => {
        console.error('Error fetching claims', error);
      }
    );
  }
}
