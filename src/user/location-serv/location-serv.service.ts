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
          'X-RapidAPI-Key': 'your-secret-key',
          'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'}});
    }

}
