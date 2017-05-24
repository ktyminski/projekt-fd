import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

import { Wear } from '../../model/wear';
import { WearService } from '../../services/wear.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  image : string; //image BASE64
  imageName : string;


  constructor(private wearService: WearService, private router: Router) { }

  add(name: string,  price : number, description : string,): void {
    name = name.trim();
    var image = this.image;
    if (!name) { return; }
    this.wearService.create(name, price, description, image)
      .then(wear => {
        console.log(`Dodano nowy obiekt ${wear.name}`);
        this.router.navigate(['/clothes']);
      });
  }


  fileChange(fileInput: any){
    this.imageName = fileInput.target.files[0].name;
    readFile(fileInput.target.files[0], (e : any) => {
              this.image = e.target.result;

       });

    function readFile(file, Callback){
      var reader = new FileReader();
      reader.onload = Callback;
      reader.readAsDataURL(file);
    }
  }
  ngOnInit() {
  }

}
