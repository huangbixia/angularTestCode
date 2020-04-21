import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyService {
  //static BASE_URL: string = 'https://api.spotify.com/v1/recommendations';
  static BASE_URL: string = 'http://msearchcdn.kugou.com/api/v3/search/song';

  constructor(private http: Http) {
  }

  query(params: string) {
    let queryURL: string = `${SpotifyService.BASE_URL}`;
    // if (params) {
    //   queryURL = `${queryURL}?${params.join('&')}`;
    // }
    //queryURL = `${queryURL}?showtype=14&highlight=em&pagesize=30&tag_aggr=1&tagtype=全部&plat=0&sver=5&keyword=${params}&correct=1&api_ver=1&version=9108&page=1&area_code=1&tag=1&with_res_tag=1`;
    // queryURL = `${queryURL}?tag=em&iscorrection=1&keyword=${params}&userid=0&pagesize=20&page=1`
    // let header: Headers = new Headers();
    // header.append('Access-Control-Allow-Origin', '*');
    // let opts: RequestOptions = new RequestOptions();
    // opts.headers = header;
    
    return this.http.request('./mockData/music.json').map((res: any) => res.json());
  }

  search(query: string): Observable<any[]> {
    return this.query(query);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query);
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }
}

export var SPOTIFY_PROVIDERS: Array<any> = [
  {provide: SpotifyService, useClass: SpotifyService}
];
