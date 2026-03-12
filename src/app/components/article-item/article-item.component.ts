import { Component, Input } from '@angular/core';
import Article from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input() article!:Article

  hidden:boolean = true
  masquer(){
    this.hidden = !this.hidden
  }

}
