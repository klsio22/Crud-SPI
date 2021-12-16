import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { User } from "./User";

@Entity("patient")
export class Patient {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  clinic: number;

  @Column()
  age: number;

  @Column()
  rg: number;

  @Column()
  cpf: number;

  @Column()
  gender: string;

  @Column()
  zipCode: number;

  @Column()
  address: string;

  @Column()
  number: number;

  @Column()
  uf: string;

  @Column()
  state: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  
  @Column()
  user_id: string;
  
  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user:User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }


}