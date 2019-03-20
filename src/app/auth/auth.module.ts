import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    NativeScriptCommonModule,
    AuthRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
