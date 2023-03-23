import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name?:string|null="";

constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.name=this.route.snapshot.paramMap.get("name");
    
    

  }

}
