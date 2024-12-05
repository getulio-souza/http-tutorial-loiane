import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
// import { CursosListaComponent } from './app/cursos/cursos-lista/cursos-lista.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()], // Ensure this is added
}).catch(err => console.error(err));
