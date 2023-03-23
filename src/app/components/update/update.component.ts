import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackEndServiceService } from 'src/app/service/wallet-back-end-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  msg: string = "";
  errorMsg: string = "";

  id: string | null = "";
  wallet: Wallet = new Wallet();

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private walletBackEndService: WalletBackEndServiceService) { }
  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("update id:" + this.id);
    this.walletBackEndService.getWalletById(this.id).subscribe(

      {
        next: (data) => {
          this.wallet = data;
          console.log(data);

        },
        error: (error) => {
          console.log(Error);

        }
      }

    )

  }

  updateWallet(){
    console.log("Update emp:");
    console.log(this.wallet);
    this.walletBackEndService.updateWallet(this.wallet).subscribe(
      {
        next:(data)=>{
          this.msg= "Employee updated successfully";
          this.errorMsg= "";
          this.router.navigateByUrl("employees");
        },
        error:(err)=>{
          console.log(err.error);
          this.msg= "";
          this.errorMsg= JSON.stringify(err.error);

        }
      }
    )
  }

}
