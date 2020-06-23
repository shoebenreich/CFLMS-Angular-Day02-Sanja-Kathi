import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

	contact = new FormGroup({
   	firstName: new FormControl('',Validators.required),
   	lastName: new FormControl('',Validators.required),
   	age: new FormControl('',Validators.required),
   	email:new FormControl('',Validators.required),
   	message : new FormControl('',Validators.required)
 	});

  constructor() { }

  ngOnInit(): void {
  }

  addMassage(){

  	if(this.contact.valid)
  	{
  	var msg = this.contact.value;
  	console.log(msg);  	
  	}
  }

}
