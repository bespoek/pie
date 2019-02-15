import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class Post {

    constructor(public id: number,
        public date: string,
        public date_gmt: string,
        public guid: {},
        public modified: string,
        public modified_gmt: string,
        public slug: boolean,
        public status: boolean,
        public type: string,
        public link: string,
        public title: {},
        public content: {},
        public excerpt: {},
        public author: string,
        public ping_status: string,
        public sticky: string,
        public template: string,
        public format: string,
        public meta: ['value'],
        public categories: ['value'],
        public tags: ['value'],
        public _links: {},
        public _embedded: {}
        ) {
    }
}

@Injectable()
export class PostService {
    url: string;
    error: any;
    tagdata: any;
    urlTag: string;
    apiRoot: string = 'http://18.191.83.117/wordpress/index.php/wp-json/wp/v2/';
    // apiRoot_2: string = 'http://18.191.83.117/wordpress/index.php/wp-json/wp/v2/';
    posts: Post[];
    loading: boolean;
    per_page: number = 10;
    page: number = 1;

    constructor(private http: Http) {
        this.posts = [];
        this.loading = false;
    }

    //service call to get all data posted
      getPost(): Observable<Post[]> {

        let apiURL = `${this.apiRoot}posts?_embed=true&per_page=${this.per_page}&page=${this.page}`;
        return this.http.get(apiURL).map(
          res => {
            return res.json().map(item => {
              return new Post(
                item.id,
                item.date,
                item.date_gmt,
                item.guid,
                item.modified,
                item.modified_gmt,
                item.slug,
                item.status,
                item.type,
                item.link,
                item.title,
                item.content,
                item.excerpt,
                item.author,
                item.ping_status,
                item.sticky,
                item.template,
                item.format,
                item.meta,
                item.categories,
                item.tags,
                item._links,
                item._embedded
              );
            });
          });
      }

    //service call to get all tags
    getTags() {
        this.urlTag = `${this.apiRoot}tags`;

        return this.http.get(this.urlTag).map(
            res => {
                res = res.json();
                return res;
            });
    }

    //service call to get all tags
    getCategories() {
        this.urlTag = `${this.apiRoot}categories`;

        return this.http.get(this.urlTag).map(
            res => {
                res = res.json();
                return res;
            });
    }


    //service call to get all published posts
    getPublishedPosts() {
        this.url = `${this.apiRoot}posts`;

        return this.http.get(this.url).map(
            res => {
                res = res.json().posts;
                return res;

            });

    }
}

@Injectable()
export class VideoService {

    url: string;
    videoId: string;
    // userKey: string = 'AIzaSyAmbZqH94zP04FMJojXfklbsjFS27Qiwl4';
    userKey: string = 'AIzaSyBYbqLcwAEWMKchBVb8TCDQHiLyDI-uuBI';
    channelId: string = 'UC6A4PIESjI6czvt-GubM8FQ';
    statistics: any;
    // serviceuri: string = "https://www.googleapis.com/youtube/v3/search?key=" + this.userKey + " &channelId=" + this.channelId + "&part=snippet,id&order=date&maxResults=20";

    constructor(private http: Http) {

    }

    //service call to get all videos
    getVideos() {
        let serviceuri = `https://www.googleapis.com/youtube/v3/search?key=${this.userKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=50`;

        return this.http.get(serviceuri).map(
            res => {
                return res = res.json().items;
            });
    }

    //service call to get statistics
    getStatistics(videoId) {
        this.url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${this.userKey}`;

        return this.http.get(this.url).map(
            result => {
                return result = result.json().items[0].statistics;
            });
    }

}