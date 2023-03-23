import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wallet } from 'src/app/model/Wallet';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { WalletBackEndServiceService } from 'src/app/service/wallet-back-end-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  wallet:Wallet=new Wallet();

  constructor(private walletService:WalletBackEndServiceService){}
  
  onSubmit(){
    //console.log(this.wallet);
    //check
    
   // this.walletService.addWallet(this.wallet);

    this.walletService.addWallet(this.wallet).subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )
  }
    
}

