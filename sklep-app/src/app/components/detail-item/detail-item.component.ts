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
  image : string ; //image BASE64
  imageName : string ;

  constructor(
    private wearService: WearService,
    private route: ActivatedRoute,
    private location: Location
  ){ }

  getCloth() : void {
    this.route.params
      .switchMap((params: Params) => this.wearService.getSingleCloth(+params['id']))
      .subscribe((wear) => { this.wear = wear, this.image = wear.image});
  }

  ngOnInit(): void {
    this.getCloth();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log(this.wear);
    this.wearService.update(this.wear)
      .then(() => this.goBack());
  }

  fileChange(fileInput: any){
    this.imageName = fileInput.target.files[0].name;
    readFile(fileInput.target.files[0], (e : any) => {
              this.image = e.target.result;
              this.wear.image = this.image;

       });

    function readFile(file, Callback){
      var reader = new FileReader();
      reader.onload = Callback;
      reader.readAsDataURL(file);
    }
  }
}
