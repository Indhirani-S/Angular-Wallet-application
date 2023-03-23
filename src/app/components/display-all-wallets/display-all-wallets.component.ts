import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';

import { from } from 'rxjs';
import { WalletBackEndServiceService } from 'src/app/service/wallet-back-end-service.service';

@Component({
  selector: 'app-display-all-wallets',
  templateUrl: './display-all-wallets.component.html',
  styleUrls: ['./display-all-wallets.component.css']
})
export class DisplayAllWalletsComponent implements OnInit{

  wallet:Wallet[] = [];

  msg: string = "";
  errorMsg: string = "";

  constructor(private router:Router, private service:WalletBackEndServiceService){ }

  ngOnInit(): void{
    this.wallet = this.service.getWallet();

    this.service.getAllWallet().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.wallet = data;
        },
        error: (err) => {
          console.log(err);

        },
        complete: () => { }
      }
    )
  }

  addFunds(){
    this.router.navigate(['addFunds']);
  }

  withdrawFunds(){
    this.router.navigate(['withdrawFunds']);
  }

  fundTransfer(){
    this.router.navigate(['fundTransfer']);
  }

  update(){
    this.router.navigate(['update']);
  }

  delete(){
    this.router.navigate(['delete']);
  }



}
