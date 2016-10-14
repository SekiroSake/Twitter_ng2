import { Component, OnInit, Input } from '@angular/core';
import { TwitServiceService } from '../twit-service.service';
import {LikeComponent} from '../like/like.component';

@Component({
  selector: 'app-twitcomponnet',
  templateUrl: './twitcomponnet.component.html',
  styleUrls: ['./twitcomponnet.component.css']
})
export class TwitcomponnetComponent implements OnInit {

  twits;
  constructor(twitService: TwitServiceService) {
    this.twits = twitService.getTwits();
  }
  ngOnInit() {


  }

}
