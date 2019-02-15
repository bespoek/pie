import { Component, ViewChild } from '@angular/core';
import { Post } from '../posts/post';
import { PostDetailPage } from '../posts/postdetail';
import { Nav, NavController, ModalController, Platform } from 'ionic-angular';
import { UtilityService } from '../../app/utilityService';
import { PostService } from '../../providers/wordpress-service';
import { MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePipe } from '@angular/common';
import { SubscribePage } from '../subscribe/subscribe';
import { CategoryFilterPage } from '../filterCategory/filterCategory';
import { VideoPage } from '../video/video';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;
  categories: any;
  author_image: String;
  showLoadMore: Boolean = true;
  isLoading: Boolean = true;

  @ViewChild(Nav) nav: Nav;
  selectedTitle: string;
  // message: string = "Hola Mundo!"

  constructor(public navCtrl: NavController, public postService: PostService, public menuCtrl: MenuController, public platform: Platform, public statusBar: StatusBar, public modalCtrl: ModalController, public datepipe: DatePipe) {
    this.getData();
  }

  getData() {
    this.postService.getPost().subscribe((data) => {
      this.posts = data;
      if(this.posts.length > 0) {
        this.isLoading = false;
      }else {
        this.isLoading = true;
      }
      Object.keys(this.posts).forEach(key => {
        // if (this.posts[key].primary_tag != null || this.posts[key].primary_tag != undefined) {
        //   this.posts[key].category = this.posts[key].primary_tag.name;
        // }
        // else {
        //   this.posts[key].category = "";
        // }
        (this.posts[key]._embedded.author).forEach((author) => {
         this.author_image = author.avatar_urls;
        });
        if (this.posts[key].author_image == null) {
          this.posts[key].author_image = 'https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png';
        }
        else {
          this.posts[key].author_image = this.posts[key].author_image;
        }
        if (this.posts[key]._embedded['wp:featuredmedia']  == "" || this.posts[key]._embedded['wp:featuredmedia']  == null || this.posts[key]._embedded['wp:featuredmedia']  == undefined) {
          this.posts[key].profile_image = 'http://via.placeholder.com/80x80';
        }
        else {
          this.posts[key].profile_image = this.posts[key]._embedded['wp:featuredmedia'][0].source_url;
        }
      });
    });

  }

  //TIMELINE section-------
  //get a list of article published dates in proper format after removing duplicates


  //Open any particular post in details
  openCard(post: Post) {
    // this.nav.setRoot(PostDetailPage);
    this.navCtrl.push(PostDetailPage, post);
  }

}
