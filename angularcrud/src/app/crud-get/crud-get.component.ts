import { Component, OnInit } from '@angular/core';
import { RomanNumbersService } from '../roman-numbers.service';

@Component({
  selector: 'app-crud-get',
  templateUrl: './crud-get.component.html',
  styleUrls: ['./crud-get.component.css']
})
export class CrudGetComponent implements OnInit {

  number: number;
  convert: any;

  constructor(
   private ATR: RomanNumbersService
  ) { }

  ngOnInit() {
  }

  arabicToRoman(){
    this.convert = this.ATR.arabicToRoman(this.number);
  }

}
