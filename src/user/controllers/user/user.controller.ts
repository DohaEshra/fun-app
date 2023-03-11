/* eslint-disable prettier/prettier */
import { LocationServService } from './../../location-serv/location-serv.service';
import { Controller, Get, Post, Query, Req, Res, Body } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { SignUpUserDto } from 'src/user/dtos/signUpUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Profile from './../../Entities/Profile.entity';
import { Repository } from 'typeorm';
import { ApiParam } from '@nestjs/swagger';

@Controller('user')
export class UserController {
 country="";
 pro:Profile=new Profile();
 
  constructor(public locServ: LocationServService,  @InjectRepository(Profile)
  private profileRepository: Repository<Profile>) {}



  @Get(':user_id')
  getuser(@Req() request: Request) {
    console.log(request.params.user_id);
    const id= Number(request.params.user_id);
    const profile =  this.profileRepository.findOne({where:{id:id}});
    if (profile) {
      return profile;
    }
  }



  @Post('signup')
  signup(@Body() userData: SignUpUserDto, @Res() response: Response) {
    let result;
    let id; 
    this.locServ.findLocation(userData.latitude, userData.longitude).subscribe(
      (a) => {
        result= a.data.Results[0];
        if(result.country!="United States of America"){
          
          return response.status(401).json({message:"couldn't signup, not in USA!"})
        }
        else{
          this.pro.name = userData.name;
          this.pro.email= userData.email;
          this.pro.latitude = userData.latitude;
          this.pro.longitude = userData.longitude;
          this.pro.city = result.city;
          this.pro.state = result.region;
          const newProfile= this.profileRepository.create(this.pro)
          this.profileRepository.save(newProfile).then(res=>{
            id=res.id
            return response.status(200).json({message:'signedup!', id:id})
          });
          
        }
      },
      (error) => {
        console.log(error.message);
      },
    );
    return 'success';
    // console.log(request.body);
    // response.send('helloooooo');
  }
}
