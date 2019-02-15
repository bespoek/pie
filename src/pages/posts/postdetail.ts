import { Component, ViewChild} from '@angular/core';
import { Nav } from 'ionic-angular';
import { NavController, NavParams, Events } from 'ionic-angular';
import { PostService } from '../../providers/wordpress-service';
import { Post } from '../../providers/wordpress-service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
    selector: 'page-post',
    templateUrl: 'pagedetail.html'
  })

  export class PostDetailPage {
  html: SafeHtml;

    @ViewChild(Nav) nav: Nav;

    post: any;
    posts:Post[];

    constructor(private domSanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams, public postService:PostService, public events: Events) {
      this.getData();
      this.posts = [];
      events.publish('hideHeader', { isHidden: true});
    }

    ionViewWillLeave() {
      //Make footer visiable while leaving the page.
      this.events.publish('hideHeader', { isHidden: false});
  }

    ionViewDidLoad() {
    }

    getData(){
      this.post = this.navParams.data;
      this.html=this.domSanitizer.bypassSecurityTrustHtml(this.post.html);

      
      if (this.post._embedded['wp:featuredmedia']  == "" || this.post._embedded['wp:featuredmedia']  == null || this.post._embedded['wp:featuredmedia']  == undefined) {
        this.post.profile_image = 'http://via.placeholder.com/400x250';
      }
      else {
        this.post.profile_image = this.post._embedded['wp:featuredmedia'][0].source_url;
      }
    
  }

    openPage(page){
        if(page==='home'){
          this.nav.goToRoot;
        }
      }
  }
