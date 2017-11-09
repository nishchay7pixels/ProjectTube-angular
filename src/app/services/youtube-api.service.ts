import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const YOUTUBE_API_KEY = "AIzaSyDVgNbO40smsbGwLv-mtYnMJ-VNsEogLbI";

@Injectable()
export class YoutubeApiService {
  base_url: string = 'https://www.googleapis.com/youtube/v3/';
  max_results: number = 50;

  public nextToken: string;
  public lastQuery: string;

  constructor(private http: Http){}

  searchVideos(query : string): Promise<any>{
    return this.http.get(this.base_url + 'search?q=' + query + '&maxResults=' + this.max_results + '&type=video&part=snippet,id&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true')
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.lastQuery = query;
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }

  trendingVideos(): Promise<any>{

    return this.http.get(this.base_url+'videos?q=contentDetails&chart=mostPopular&regionCode=IN&maxResults='+this.max_results+'&type=video&part=snippet,id&key=AIzaSyDVgNbO40smsbGwLv-mtYnMJ-VNsEogLbI&videoEmbeddable=true')
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        let ids = [];

        res.forEach((item) => {
          ids.push(item.id);
        });
        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)

  }
  searchNext(): Promise<any> {
    return this.http.get(this.base_url + 'search?q=' + this.lastQuery + '&pageToken=' + this.nextToken + '&maxResults=' + this.max_results + '&type=video&part=snippet,id&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true')
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }

  getVideos(ids): Promise<any> {

    return this.http.get(this.base_url + 'videos?id=' + ids.join(',') + '&maxResults=' + this.max_results + '&type=video&part=snippet,contentDetails,statistics&key=' + YOUTUBE_API_KEY)
      .map(results => {
        return results.json()['items'];
      }).toPromise().catch(this.handleError)
  }

  private handleError(error : Response | any){
    let errMsg: string;
    console.log(errMsg);
    if( error instanceof Response){
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }

    return Promise.reject(errMsg);
    }

    //https://www.googleapis.com/youtube/v3/search?eventType=live&part=snippet&type=video&key=AIzaSyDVgNbO40smsbGwLv-mtYnMJ-VNsEogLbI

  getLiveVideos(): Promise<any> {
    return this.http.get(this.base_url + 'search?eventType=live&part=snippet&type=video&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true')
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }
}

