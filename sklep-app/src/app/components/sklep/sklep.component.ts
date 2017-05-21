import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Wear } from '../../model/wear';
import { WearService } from '../../services/wear.service';



@Component({
  selector: 'app-sklep',
  templateUrl: './sklep.component.html',
  styleUrls: ['./sklep.component.css'],
})
export class SklepComponent implements OnInit {

  constructor(private router: Router, private wearService: WearService) {

  }

  getClothes(): void {
    this.wearService.getClothes()
    .then(clothes => this.clothes = clothes);
  }

  clothes : Wear[];
  selectedWear: Wear;

  onSelect(wear: Wear): void {
    this.selectedWear = wear;
  }

  ngOnInit(): void {
    this.getClothes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWear.id]);
  }
}
