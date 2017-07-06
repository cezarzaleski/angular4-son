import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyTaskDirective } from './my-task.directive';
import { FormularioValidacaoComponent } from './formulario-validacao/formulario-validacao.component';
import { TaskNewComponent } from './task-new/task-new.component';
import {TaskService} from "./task.service";
import { CepComponent } from './cep/cep.component';
import {CepService} from "./cep.service";
import {RouterModule, Routes} from "@angular/router";


//rotas da apliacação
const appRoutes:Routes = [
  {path: 'tasks', component: TaskListComponent},
  {path: 'tasks/new', component: TaskNewComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyTaskDirective,
    FormularioValidacaoComponent,
    TaskNewComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      TaskService,
      CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
