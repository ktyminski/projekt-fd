import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Wear } from '../../model/wear';
import { WearService } from '../../services/wear.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  wear: Wear;

  constructor(
    private wearService: WearService,
    private route: ActivatedRoute,
    private location: Location
  ){ }

  getCloth() : void {
    this.route.params
      .switchMap((params: Params) => this.wearService.getSingleCloth(+params['id']))
      .subscribe(wear => this.wear = wear);
  }

  ngOnInit(): void {
    this.getCloth()
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.wearService.update(this.wear)
      .then(() => this.goBack());
  }
}
