import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../common/service/SpotifyService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute ) { 
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  ngOnInit() {
    this.search();
  }

  // 表单提交
  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query }})
        .then(_ => this.search() );
  }

  // 数据处理函数
  renderResults(res:any): void {
    this.results = null;
    if (res && res.code === '0000' && res.result) {
      this.results = res.result;
    }
  }
  // 搜索函数
  search(): void {
    console.log('this.query', this.query);
    if (!this.query) return;

    this.spotify
        .searchTrack(this.query)
        .subscribe((res: any) => {
        this.renderResults(res);
    });
  }

}
