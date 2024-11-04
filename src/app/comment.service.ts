import { Injectable } from '@angular/core';

export interface Comment {
  name: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  getComments(): Comment[] {
    return this.comments;
  }
}
