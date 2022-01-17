import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './feature/nav-menu/nav-menu.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { AddPetComponent } from './feature/addpet/addpet.component';
import { AuthGuard } from './core/guards/auth-guard';
import { ErrorPageComponent } from './feature/error/error-page.component';
import { PetTypeDropdownComponent } from './shared/pet-type-dropdown/pet-type-dropdown.component';
import { GlobalHttpInterceptor } from './core/interceptors/globalhttp.interceptor';
import { GlobalErrorHandler } from './core/errorhandlers/global.errorhandler';
import { PetDataResolver } from './core/resolvers/pet-data.resolver';


export function app_init() {
  return function () {
    localStorage.clear();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    AddPetComponent,
    ErrorPageComponent,
    PetTypeDropdownComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        resolve: { petData: PetDataResolver },
        pathMatch: 'full'
      },
      { path: 'login', component: LoginComponent },
      {
        path: 'addpet', component: AddPetComponent,
        canActivate: [AuthGuard]
      },
      { path: 'unauthorized', component: ErrorPageComponent, data: {page:'401'} }
    ])
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: app_init, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptor, multi: true },
              { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
