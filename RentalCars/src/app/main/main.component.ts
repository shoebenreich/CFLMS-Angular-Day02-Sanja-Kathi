import { Component, OnInit } from '@angular/core';
// import { AddCarsFormComponent } from '../add-cars-form/add-cars-form.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	// newarray= new AddCarsFormComponent();
	cars = [{
		brand: "Audi",
		model: "A3",
		manufacturingYear: 2013,
		price: 15000,
		img: "audia3.jpg"}
		,
		{
		 brand: "BMW",
		 model: "X6",
		 manufacturingYear: 2019,
		 price: 30000,
		 img: "bmwx6.jpg"}
		 ,
		 {
		 brand: "Mercedes",
		 model: "AMG GT R",
		 manufacturingYear: 2020,
		 price: 282000,
		 img: "amggtr.jpg"},
		 {    
		 brand: "Peugeot",
		 model: "3008",
		 manufacturingYear: 2013,
		 price: 7000,
		 img: "peugeot3008.jpg"}
		 ,
		 {    
		 brand: "Renault",    
		 model: "Twingo",    
		 manufacturingYear: 2020,    
		 price: 10000,    
		 img: "renaulttwingo.jpg" }
		 	,  
		{    
		 brand: "Nissan",    
		 model: "GTR",    
		 manufacturingYear: 2017,    
		 price: 100000,    
		 img: "nissangtr.jpg"},  
		 {    
		 brand: "Honda",    
		 model: "Civic",    
		 manufacturingYear: 2012,    
		 price: 8000,    
		 img: "hondacivic.jpg"}
		 ,  
		 {    
		 brand: "VW",    
		 model: "Passat",    
		 manufacturingYear: 2017,    
		 price: 15000,    
		 img: "vwpassat.jpg"
		 },  
		 {    
		 brand: "Mitsubishi",    
		 model: "Lancer",    
		 manufacturingYear: 2008,    
		 price: 8000,    
		 img: "mitsubishilancer.jpg" }];

  constructor() {
  	  	
   }

  ngOnInit(): void {
  	// this.cars = this.newarray.sendToArray();
  }

}
