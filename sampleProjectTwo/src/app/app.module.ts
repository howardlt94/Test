import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleComponentTwoComponent } from './sample-component-two/sample-component-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    SampleComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
