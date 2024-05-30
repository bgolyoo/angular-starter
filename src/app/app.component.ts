import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly #http = inject(HttpClient);
  readonly #title = inject(Title);

  posts = signal<unknown>([]);

  constructor() {
    this.setTitle();
    this.fetchPosts();
  }

  private fetchPosts() {
    this.#http.get('/api/posts').subscribe({
      next: (posts) => this.posts.set(posts),
      error: (error) => console.error(error),
    });
  }

  private setTitle() {
    this.#title.setTitle(
      [!environment.production ? `[${environment.environmentName}]` : '', 'Angular Template'].join(' '),
    );
  }
}
