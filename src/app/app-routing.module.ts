import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrangeComponent } from './orange/orange.component';
import { FreeComponent } from './free/free.component';
import { ExpressoComponent } from './expresso/expresso.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },{
    path: 'inscription',
    component:InscriptionComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'Reporting',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'orange',
    component:OrangeComponent
  },
  {
    path: 'free',
    component:FreeComponent
  },
  {
    path: 'expresso',
    component:ExpressoComponent
  },
  {
    path: 'tp-inr',
    loadChildren: () => import('./tp-inr/tp-inr.module').then( m => m.TpInrPageModule)
  },
  {
    path: 'education-therapeutique',
    loadChildren: () => import('./education-therapeutique/education-therapeutique.module').then( m => m.EducationTherapeutiquePageModule)
  },
  {
    path: 'accident-avk',
    loadChildren: () => import('./accident-avk/accident-avk.module').then( m => m.AccidentAvkPageModule)
  },
  {
    path: 'autre-medicament',
    loadChildren: () => import('./autre-medicament/autre-medicament.module').then( m => m.AutreMedicamentPageModule)
  },
  {
    path: 'update-patient',
    loadChildren: () => import('./update-patient/update-patient.module').then( m => m.UpdatePatientPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./medecin/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'suivi-patient',
    loadChildren: () => import('./medecin/suivi-patient/suivi-patient.module').then( m => m.SuiviPatientPageModule)
  },
  {
    path: 'first-log',
    loadChildren: () => import('./first-log/first-log.module').then( m => m.FirstLogPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
