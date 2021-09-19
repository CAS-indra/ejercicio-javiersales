import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: 'contacto',
     loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'transaction/new', loadChildren: () => import('./nueva-transaccion/nueva-transaccion.module').then(m => m.NuevaTransaccionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
