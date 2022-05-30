import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MediakitComponent } from './pages/mediakit/mediakit.component';
import { NewsComponent } from './pages/news/news.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
  { path: "home", component : HomeComponent},
  { path: "news", component : NewsComponent},
  { path: "mediakit", component : MediakitComponent},
  { path: "portfolio", component : PortfolioComponent},
  { path: "about", component : AboutComponent},
  { path: "contact", component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
