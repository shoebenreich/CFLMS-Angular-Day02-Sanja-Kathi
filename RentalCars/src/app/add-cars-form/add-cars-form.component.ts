import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'add-cars',
  templateUrl: './add-cars-form.component.html',
  styleUrls: ['./add-cars-form.component.css']
})

export class AddCarsFormComponent implements OnInit {
  mainComponent = new MainComponent();

	newCar = new FormGroup({
   	brand: new FormControl('',Validators.required),
   	model: new FormControl('',Validators.required),
   	manufacturingYear: new FormControl('',Validators.required),
   	price:new FormControl('',Validators.required),
   	img : new FormControl('',Validators.required)
 	});

  constructor() {
  	console.log(this.mainComponent.cars)
  }
  ngOnInit(): void {
  }

  sendToArray()
  {

  	if (this.newCar.valid)
  	{

  		var i = this.newCar.value;
  		this.mainComponent.cars.push(i);

  			//return this.mainComponent.cars;
  	}
  }

}
