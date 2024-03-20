import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { LiveComponent } from './pages/live/live.component';

export const routes: Routes = [

  {path:'home' , component:HomeComponent,
    title: "Home | Cricekt Informer"},
  {path:'history' , component : HistoryComponent,
   title: 'Match History | CricketInformer'},
  {path:'point-table' , component : PointTableComponent,
    title : 'Point Table | CricketInformer '},
  {path:'live', component : LiveComponent,
  title : 'Live Score | CricketInformer'}
];
