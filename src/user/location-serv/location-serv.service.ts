/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { query } from 'express';


@Injectable()
export class LocationServService {
    constructor(private readonly httpService: HttpService,
  ){}

    findLocation(latt, long) {
        return this.httpService.get('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',{params: {lat: latt, lng: long},
        headers: {
          'X-RapidAPI-Key': 'f41ae815b4msh44ed8e163ff0779p13a227jsne0af8baceef9',
          'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'}});
    }

}
