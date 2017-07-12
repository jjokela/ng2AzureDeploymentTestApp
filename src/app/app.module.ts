import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatModule } from './chat/chat.module';

import { SignalRModule, SignalRConfiguration } from 'ng2-signalr';

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'chatHub';
  c.qs = { user: 'donald' };
  c.url = 'http://signalrtestapp.azurewebsites.net/';
  c.logging = true;
  return c;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChatModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SignalRModule.forRoot(createConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
