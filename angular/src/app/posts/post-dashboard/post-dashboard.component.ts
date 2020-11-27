import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { PostService } from "../post.service";
import {Like}from '../like';
@Component({
  selector: "app-post-dashboard",
  templateUrl: "./post-dashboard.component.html",
  styleUrls: ["./post-dashboard.component.css"],
})
export class PostDashboardComponent implements OnInit {
  content: string;
  title: string;
  saving = "Create Post";
  likes:Like;


  constructor(
    private auth: AuthService,
    private postService: PostService,
  ) {}
  ngOnInit() {}

  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      published: new Date(),
      title: this.title,
      likes:this.likes,
      
    };
    this.postService.create(data);

    this.title = "";
    this.content = "";
    this.saving = "Post Created!";
    setTimeout(() => (this.saving = "Create Post"), 3000);
  }

 
 
}
