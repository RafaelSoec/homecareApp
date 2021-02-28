import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutesEnum } from './modules/shared/models/enums/AppRoutesEnum';

const routes: Routes = [
  {
    path: AppRoutesEnum.NONE,
    redirectTo: AppRoutesEnum.SECURITY,
    pathMatch: AppRoutesEnum.FULL,
  },
  {
    path: AppRoutesEnum.HOME,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: AppRoutesEnum.SECURITY,
    loadChildren: () =>
      import('./modules/security/security.module').then(
        (m) => m.SecurityPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
