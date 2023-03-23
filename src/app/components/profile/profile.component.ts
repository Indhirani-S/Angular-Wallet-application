import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackEndServiceService } from 'src/app/service/wallet-back-end-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  wallet:Wallet= new Wallet();

  constructor(private service:WalletBackEndServiceService){}

  ngOnInit(): void {
    
    this.service.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.wallet= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

}
