import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import User from './models/user.model';
import Article from './models/article.model';
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ArticleListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// composant parent
export class AppComponent {
  users: User[] = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
  ];

articles: Article[] = [
    { title: 'Angular Basics', content: 'Introduction to Angular...' },
    { title: 'Components and Templates', content: 'Understanding components...' },
    { title: 'Directives in Angular', content: 'How to use directives...' }
  ]

    fuseaux: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal'
  ];

  setTime(timeZone: string){
    const date = new Date().toLocaleString('fr-Fr', {timeZone:timeZone} );
    const time = date.split(' ')[1]

    setInterval(() => {
      this.setTime(timeZone)
    }, 1000);

    return time
  }

  addArticle(article:any){
    this.articles.push(article)
  }

}
