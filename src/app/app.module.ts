import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator';

// Estudos de Angular, exercícios criados com base no curso:
// Formação Angular 12 - O início criando 7 projetos (Udemy)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
