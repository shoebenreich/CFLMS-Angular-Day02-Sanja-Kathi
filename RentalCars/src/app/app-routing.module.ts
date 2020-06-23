import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AddCarsFormComponent } from './add-cars-form/add-cars-form.component';


const routes: Routes = [{

	path: "",component: MainComponent
	
},
{
	path: "team",component: TeamComponent
},
{
	path: "contact",component: KontaktComponent
},
{
	path: "addCar",component: AddCarsFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
