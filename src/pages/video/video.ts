import { Component } from '@angular/core';
import { Post } from '../posts/post';
import { PostDetailPage } from '../posts/postdetail';
import { Nav, NavController, ModalController, Platform, NavParams } from 'ionic-angular';
import { UtilityService } from '../../app/utilityService';
import { MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePipe } from '@angular/common';
import { SubscribePage } from '../subscribe/subscribe';
import { CategoryFilterPage } from '../filterCategory/filterCategory';
import { VideoService } from '../../providers/wordpress-service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  videos: any;
  videoItmes: any;
  urls: any;
  statistics: any[];
  videoIds: any[];
  pievideos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public videoService: VideoService, private sanitizer: DomSanitizer) {
    this.getData();
  }

  ionViewDidLoad() {

  }

  getData() {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
      this.videos.forEach((video) => {
        let id = video.id.videoId;
        let snippet = video.snippet;

        if (id != undefined) {
          this.videoService.getStatistics(id).subscribe((res) => {
            if (res != null) {
              this.pievideos.push({
                id: id,
                stats: res,
                snip: snippet
              });
            }
          });
        }
      });
      console.log('Final Object :: ', this.pievideos);
    });
  }

  openVideo(video) {
    window.location.href = `https://www.youtube.com/watch?v=${video.id}`;
  }
}
