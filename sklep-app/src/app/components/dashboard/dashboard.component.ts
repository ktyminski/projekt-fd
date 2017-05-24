import { Component, OnInit } from '@angular/core';

import { Wear } from '../../model/wear';
import { WearService } from '../../services/wear.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clothes: Wear[] = [];
  constructor(private wearService: WearService) { }

  ngOnInit(): void {
   this.wearService.getClothes()
   .then(clothes => this.clothes = clothes);
 }
}
