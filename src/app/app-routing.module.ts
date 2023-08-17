import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    title: 'Главная',
  },
  {
    path: 'tabs',
    component: TabsPageComponent,
    title: 'tabs',
    pathMatch: 'full',
    // canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: '404', title: 'not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
