import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  donatedSum: number = 0;
  donate(){
    this.donatedSum += 10
    console.log(this.donatedSum)
  }


  ngOnInit(): void {
  }

}
