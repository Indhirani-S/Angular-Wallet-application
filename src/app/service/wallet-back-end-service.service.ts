import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/model/Wallet'

@Injectable({
  providedIn: 'root'
})
export class WalletBackEndServiceService {
  

  wallet:Wallet = new Wallet();
  http: any;
  
  

  constructor() { }

  getWallet(): Wallet[] {
    throw new Error('Method not implemented.');
  }


  addWallet(newWallet:Wallet):Observable<any>{
    let url:string = "http://localhost:8080/auth/wallet";
    return this.http.post(url,newWallet,{responseType:'json'});
  }

    getWalletById(id:string|null):Observable<any>{
      return this.http.get("http://localhost:8080/auth/wallet/"+id);
    }
   
    deleteWalletById(id?:number):Observable<any>{
      return this.http.delete("http://localhost:8080/auth/wallet/"+id);
    }
    
   
    updateWallet(wallet:Wallet):Observable<any>{
      return this.http.put("http://localhost:8080/auth/wallet/",wallet);
    }

  getAllWallet():Observable<any>{
    return this.http.get("http://localhost:8080/auth/wallets");
  }

  userLogin(wallet:Wallet):Observable<any>{
    return this.http.post("http://localhost:8080/auth/login",wallet,{responseType:'json'});
  }
  userLogout(){

  }
  getUserInfo():Observable<any>{

    let jwt = sessionStorage.getItem("jwt");

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
   });
   return this.http.get("http://localhost:8080/auth/userinfo", { headers: reqHeader })

  }

}

