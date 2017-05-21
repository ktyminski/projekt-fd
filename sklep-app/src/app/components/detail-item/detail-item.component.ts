import { Component, OnInit,  Input } from '@angular/core';

import { Wear } from '../../model/wear';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() wear: Wear;

  constructor() { }

  ngOnInit() {
  }

}
