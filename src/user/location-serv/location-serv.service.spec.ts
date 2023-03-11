import { Test, TestingModule } from '@nestjs/testing';
import { LocationServService } from './location-serv.service';

describe('LocationServService', () => {
  let service: LocationServService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationServService],
    }).compile();

    service = module.get<LocationServService>(LocationServService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
