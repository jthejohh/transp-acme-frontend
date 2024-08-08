import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  standalone: true,
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  toggleMenu(): void {
    
  }
}
