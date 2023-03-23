import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { WithdrawFundsComponent } from './components/withdraw-funds/withdraw-funds.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DisplayAllWalletsComponent } from './components/display-all-wallets/display-all-wallets.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addFunds', component: AddFundsComponent },
  { path: 'withdrawFunds', component: WithdrawFundsComponent },
  { path: 'fundTransfer', component: FundTransferComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:name', component: DetailsComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'display-all-wallets', component: DisplayAllWalletsComponent},
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
