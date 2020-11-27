import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PostService } from '../post.service' 
import { Post } from '../post'
import { AuthService } from '../../core/auth.service'
import { Like } from '../like';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post
  editing: boolean = false
  // heartType:string="heart-empty"
  // likes:string[];
  likes:Like=new Like();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.getPost()
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getPostData(id).subscribe(post => (this.post = post))
  }
 

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.delete(id)
    this.router.navigate(['/blog'])
  }
  toggleHeart(){
    const id = this.route.snapshot.paramMap.get('id')
   const like=this.auth.currentUserId;

    this.likes.like=like;

    this.postService.update(id,this.likes);
  
  }
}
