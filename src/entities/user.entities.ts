import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({
    type: 'text',
  })
  username!: string

  @Column({
    unique: true,
    type: 'text',
  })
  email!: string

  @Column({
    type: 'varchar',
  })
  password!: string
}
