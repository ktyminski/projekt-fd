import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Wear } from '../../model/wear';
import { WearService } from '../../services/wear.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  constructor(private wearService: WearService, private router: Router) { }

  add(name: string, description : string, price : number): void {
    name = name.trim();
    console.log(description);
    if (!name) { return; }
    this.wearService.create(name, description, price)
      .then(wear => {
        console.log(`Dodano nowy obiekt ${wear.name}`);
        this.router.navigate(['/clothes']);
      });
  }

  ngOnInit() {
  }

}
