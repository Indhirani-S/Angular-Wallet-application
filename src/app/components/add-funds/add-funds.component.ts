import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Wallet } from 'src/app/model/Wallet';



@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent {

  wallet:Wallet[]=[];

  constructor(){ }

  msg: string = "";
  errorMsg: string = "";

  id: string | null = "";

  userForm : any = FormGroup;
  walletf:Wallet=new Wallet();
  submitted = false;

  

  onSubmit(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    if(this.submitted){

      alert("success");
      console.log(this.walletf);
    }
  }
}
