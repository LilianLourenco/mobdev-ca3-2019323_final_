import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from    '../../services/api.service';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes: Observable<any>;
    episodeList: any[];
    searchEpisodeList: any[];
    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
        console.log('my data', data);
        this.episodeList;
        this.searchEpisodeList;
        });
    }

    openDetails(episode) {
        let episodeId = episode.episode_id;        
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }




initializeItems(): void {
  this.episodeList = this.searchEpisodeList;
        this.router.navigateByUrl(`/tabs/episodes/${EpisodesPage}`);
}




filterList(evt) {
  this.initializeItems();

  const searchTerm = evt.srcElement.value;

  if (!searchTerm) {
    return;
  }

  this.episodeList = this.episodeList.filter(currentEpisode => {
    if (currentEpisode.episode && searchTerm) {
      if (currentEpisode.episode.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
}






}
