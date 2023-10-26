import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  title: string

  @Column({ type: 'varchar' })
  description: string

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number

  @Column({ type: 'numeric', precision: 5, scale: 2 })
  discountPercentage: number

  @Column({ type: 'numeric', precision: 3, scale: 2 })
  rating: number

  @Column({ type: 'int' })
  stock: number

  @Column({ type: 'varchar' })
  brand: string

  @Column({ type: 'varchar' })
  category: string
}
