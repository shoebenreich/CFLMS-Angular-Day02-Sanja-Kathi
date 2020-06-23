import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

	staff = [
		{
		firstname: "Mickey",
		lastname: "Mouse",
		age: 27,
		position: "Housekeeping",
		img: "mouseMickey.jpg"
		},
		{
		firstname: "Minnie",
		lastname: "Mouse",
		age: 35,
		position: "Sales",
		img: "mouseMinnie.jpg"
		},
		{
		firstname: "Donald",
		lastname: "Duck",
		age: 34,
		position: "CEO",
		img: "duckDonald.jpg"
		},
		{
		firstname: "Daisy",
		lastname: "Duck",
		age: 35,
		position: "Human Ressources",
		img: "madMax.jpg"
		},
		{
		firstname: "Huey",
		lastname: "Duck",
		age: 18,
		position: "Sales",
		img: "duckHuey.jpg"
		},
		{
		firstname: "Dewey",
		lastname: "Duck",
		age: 18,
		position: "Sales",
		img: "duckDewey.jpg"
		},
		{
		firstname: "Louie",
		lastname: "Duck",
		age: 18,
		position: "Sales",
		img: "duckLouie.jpg"
}]


  constructor() { }

  ngOnInit(): void {
  }

}
