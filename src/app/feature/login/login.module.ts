import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonDirectiveDirective } from 'src/app/core/directives/button-directive.directive';


@NgModule({
  declarations: [
    LoginComponent,
    ButtonDirectiveDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class LoginModule { }
