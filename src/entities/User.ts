import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn,  } from "typeorm";
import { v4 as uuid } from 'uuid'
import { TypeUser } from "./TypeUser";

@Entity("user")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type_user_id: string;
  
  @JoinColumn({ name: "type_user_id" })
  @OneToOne(() => TypeUser)
  user:TypeUser;
  
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }


}