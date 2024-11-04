import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { CommentService } from './comment.service'; // Importar o serviço

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResourcesComponent,
    DiscussionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adicionar aqui
  ],
  providers: [CommentService], // Adicionar o serviço
  bootstrap: [AppComponent]
})
export class AppModule { }
