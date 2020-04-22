import { FavouriteService } from '../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths-details',
    templateUrl: './deaths-details.page.html',
    styleUrls: ['./deaths-details.page.scss'],
})
export class DeathsDetailsPage implements OnInit {





    quote: any;
    isFavourite = false;
    deathId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {

        this.deathId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(this.deathId).subscribe(res => {
            this.deathId = res[0];
        });

        this.favouriteService.isFavourite(this.deathId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteQuote() {
        this.favouriteService.favouriteEpisode(this.deathId).then(() => {
            this.isFavourite = true;
        });
    }



}
