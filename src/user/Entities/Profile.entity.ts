/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Profile {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;
  @Column({type: 'double precision'})
  public latitude: Float64Array;
  @Column({type: 'double precision'})
  public longitude: Float64Array;
  @Column()
  public city: string;
  @Column()
  public state: string;
}

export default Profile;
