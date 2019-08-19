import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorktimerComponent } from './pages/worktimer/worktimer.component';


const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'worktimer', component: WorktimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
