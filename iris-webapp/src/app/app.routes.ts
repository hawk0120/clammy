import { Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {ClaimMgmtComponent} from './components/claim-mgmt/claim-mgmt.component';

export const routes: Routes = [
				{ path: '', redirectTo: '/login', pathMatch: 'full' },
				{ path: 'login', component: LoginComponent},
				{ path: 'claims', component: DashboardComponent},
				{path: 'claimMgmt', component: ClaimMgmtComponent}

];
