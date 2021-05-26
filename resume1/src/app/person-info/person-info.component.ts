import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent {
  preson={
    surname:'Chrysler',
    firstname:'Bob ',
    phone:'(099) 1111111',
    email:'bc@gmail.com',
    photo:'https://photo-ideal.ru/upload/iblock/d87/xfoto_na_rezyume_23.jpg.pagespeed.ic.7hNH8fVULV.jpg'
  }

}
