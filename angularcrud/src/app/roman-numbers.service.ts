import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  arabicToRoman(num: number) {
    //Número mayor a 1000 o menor a 0
    if(num > 1000 || num<0){
      return "Solo se admiten números entre 1 y 1000"
    }

    //Números entre el 101 y 1000
    if (num > 100 && num < 1000 && num != 400 && num != 500 && num != 900) {
      if (num % 100 == 0) {
        if (num / 100 > 5) {
          return 'D' + this.aisgnaC(num - 500);
        }
        return this.aisgnaC(num);
      } else if (num % 100 == 40 || num % 100 == 90) {
        var au = num % 100;
        au = num - au;
        return this.arabicToRoman(au) + this.arabicToRoman(num % 100);
      } else{
        var au = num % 100;
        num = num - au;
        return this.arabicToRoman(num) + this.arabicToRoman(au);
      }
    }

    //Números entre el 11 y 99
    if (num > 10 && num < 100 && num != 40 && num != 90 && num != 50) {
      if (num % 10 == 0) {
        if (num / 10 > 5) {
          return 'L' + this.aisgnaX(num - 50);
        }
        return this.aisgnaX(num);
      } else if (num % 10 == 4 || num % 10 == 9) {
        var au = num % 10;
        au = num - au;
        return this.arabicToRoman(au) + this.arabicToRoman(num%10);
      } else {
        var au = num % 10;
        num = num - au;
        return this.arabicToRoman(num) + this.arabicToRoman(au);
      }
    }

    //Números del 1 al 10

    if (num > 5 && num < 9) {
      var i: number = num - 5;
      return "V" + this.aisgnaI(i);;
    }

    if (num < 4) {
      return this.aisgnaI(num);
    }

    if (num == 4) {
      return "IV";
    }

    if (num == 5) {
      return "V";
    }

    if (num == 9) {
      return "IX";
    }

    if (num == 10) {
      return "X";
    }
//Numero 40
    if (num == 40) {
      return "XL";
    }
//Numero 50
    if (num == 50) {
      return "L";
    }
//Numero 90
    if (num == 90) {
      return "XC";
    }
//Numero 100
    if (num == 100) {
      return "C";
    }
//Numero 400
    if (num == 400) {
      return "CD";
    }
//Numero 500
    if (num == 500) {
      return "D";
    }
//Numero 900
    if (num == 900) {
      return "CM";
    }
//Numero 1000
    if (num == 1000) {
      return "M";
    }


  }

  aisgnaI(num: number) {
    let roman: string = "";
    for (let i = 0; i < num; i++) {
      roman += "I";
    }
    return roman;
  }

  aisgnaX(num: number) {
    let roman: string = "";
    for (let i = 0; i < num; i += 10) {
      roman += "X";
    }
    return roman;
  }

  aisgnaC(num: Number) {
    let roman: string = "";
    for (let i = 0; i < num; i += 100) {
      roman += "C";
    }
    return roman;
  }


}