import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackEndServiceService } from 'src/app/service/wallet-back-end-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  id: string | null = "";
  wal: Wallet = new Wallet();
  wallet:Wallet[]=[];

  msg: string = "";
  errorMsg: string = "";
  

  constructor(private service:WalletBackEndServiceService, private activatedRoute:ActivatedRoute){ }
  
  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    

  }
  
  deleteWallet(id?: number): void {
    console.log("Delete wallet id:" + id);
    if (window.confirm("Do you want to delete Wallet >?"))
      this.service.deleteWalletById(id).subscribe(
        {
          next: (data) => { // success
            this.msg = "Wallet Deleted Successfully . Id:" + id;
            this.errorMsg = "";
            // to filter the employee having delted id

            this.wallet = this.wallet.filter((wallet) => {
              console.log("wal.id:" + wallet.id);
              console.log("id:" + id);

              if (wallet.id != id) {
                console.log("true :" + wallet.id);
                return true;
              }

              else {
                console.log("false :" + wallet.id);
                return false;

              }

            }
            );
            console.log(this.wallet);
          
          },
          error: () => {
            this.errorMsg = "Wallets Could not be deletd.";
            this.msg = "";
          },
          complete: () => { }
        }
      )

  }

}
