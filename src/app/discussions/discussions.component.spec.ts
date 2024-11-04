import { Component } from '@angular/core';
import { Comment, CommentService } from '../comment.service';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent {
  comments: Comment[] = [];
  name: string = '';
  message: string = '';

  constructor(private commentService: CommentService) {
    this.loadComments();
  }

  loadComments() {
    this.comments = this.commentService.getComments();
  }

  addComment() {
    if (this.name && this.message) {
      const newComment: Comment = { name: this.name, message: this.message };
      this.commentService.addComment(newComment);
      this.name = '';
      this.message = '';
      this.loadComments(); // Recarrega os comentários
    }
  }
}