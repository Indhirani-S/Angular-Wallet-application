import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackEndServiceService } from 'src/app/service/wallet-back-end-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  wallet: Wallet = { email: "", password: "" };

  constructor(private router: Router, private walletService: WalletBackEndServiceService) { }

  displayUserForm() {
    console.log("displayUserForm()");
    //console.log(this.wallet);
  }

  submitLoginForm() {
    console.log("submitted");

    

    console.log(this.wallet);

    this.walletService.userLogin(this.wallet).subscribe(
      {
        next:(data)=>{
          console.log(data);
          sessionStorage.setItem("user",JSON.stringify(data));
          console.log(data.jwt);
          sessionStorage.setItem("jwt",data.jwt);
          sessionStorage.setItem("role",data.role);
          
          //localStorage
          this.router.navigateByUrl("home");
        },
        error:(err)=>{
          console.log(err);
        }
      }
    );
    

  }

}
