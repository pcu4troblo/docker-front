import { TestBed, inject } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RomanNumbersService]
    });
  });

  it('should be created', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service).toBeTruthy();
  }));

  it('1 debe ser igual a I', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(1)).toEqual('I');
  }));

  it('2 debe ser igual a II', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(2)).toEqual('II');
  }));

  it('3 debe ser igual a III', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(3)).toEqual('III');
  }));

  it('4 debe ser igual a IV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(4)).toEqual('IV');
  }));

  it('5 debe ser igual a V', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(5)).toEqual('V');
  }));

  it('6 debe ser igual a VI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(6)).toEqual('VI');
  }));

  it('7 debe ser igual a VII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(7)).toEqual('VII');
  }));

  it('8 debe ser igual a VIII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(8)).toEqual('VIII');
  }));

  it('9 debe ser igual a IX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(9)).toEqual('IX');
  }));

  it('10 debe ser igual a X', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(10)).toEqual('X');
  }));

  it('40 debe ser igual a XL', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(40)).toEqual('XL');
  }));

  it('50 debe ser igual a L', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(50)).toEqual('L');
  }));

  it('90 debe ser igual a XC', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(90)).toEqual('XC');
  }));

  it('100 debe ser igual a C', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(100)).toEqual('C');
  }));

  it('400 debe ser igual a CD', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(400)).toEqual('CD');
  }));

  it('500 debe ser igual a D', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(10)).toEqual('X');
  }));

  it('900 debe ser igual a CM', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(900)).toEqual('CM');
  }));

  it('1000 debe ser igual a M', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(1000)).toEqual('M');
  }));

  /*it('11 debe ser igual a XI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(11)).toEqual('XI');
  }));

  it('12 debe ser igual a XII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(12)).toEqual('XII');
  }));

  it('13 debe ser igual a XIII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(13)).toEqual('XIII');
  }));*/

  it('30 debe ser igual a XXX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(30)).toEqual('XXX');
  }));

  it('80 debe ser igual a LXXX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(80)).toEqual('LXXX');
  }));

  it('14 debe ser igual a XIV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(14)).toEqual('XIV');
  }));

  it('19 debe ser igual a XIX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(19)).toEqual('XIX');
  }));

  it('44 debe ser igual a XLIV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(44)).toEqual('XLIV');
  }));

  it('49 debe ser igual a XLIX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(49)).toEqual('XLIX');
  }));

  it('94 debe ser igual a XCIV', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(94)).toEqual('XCIV');
  }));

  it('99 debe ser igual a XCIX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(99)).toEqual('XCIX');
  }));

  it('46 debe ser igual a XLVI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(46)).toEqual('XLVI');
  }));

  it('43 debe ser igual a XLII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(43)).toEqual('XLIII');
  }));

  it('93 debe ser igual a XCIII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(93)).toEqual('XCIII');
  }));

  it('96 debe ser igual a XCVI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(96)).toEqual('XCVI');
  }));

  it('300 debe ser igual a CCC', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(300)).toEqual('CCC');
  }));

  it('800 debe ser igual a DCCC', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(800)).toEqual('DCCC');
  }));

  it('440 debe ser igual a CDXL', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(440)).toEqual('CDXL');
  }));

  it('490 debe ser igual a CDXC', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(490)).toEqual('CDXC');
  }));

  it('940 debe ser igual a CMXL', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(940)).toEqual('CMXL');
  }));

  it('990 debe ser igual a XCIX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(990)).toEqual('CMXC');
  }));

  it('930 debe ser igual a CMXXX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(930)).toEqual('CMXXX');
  }));

  it('980 debe ser igual a CMLXXX', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(980)).toEqual('CMLXXX');
  }));

  it('143 debe ser igual a CXLIII', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(143)).toEqual('CXLIII');
  }));

  it('496 debe ser igual a CDXCVI', inject([RomanNumbersService], (service: RomanNumbersService) => {
    expect(service.arabicToRoman(496)).toEqual('CDXCVI');
  }));

 

});
