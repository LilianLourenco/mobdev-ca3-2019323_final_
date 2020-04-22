import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    death: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.death = this.api.getDeaths();
        this.death.subscribe(data => {
            console.log('my data', data);
        });
    }

    openDetails(death) {
        let deathId = death.deathId;        
        this.router.navigateByUrl('/tabs/death/${deathId}');
    }
}

