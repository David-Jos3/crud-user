import 'dotenv/config'
import { DataSource } from 'typeorm'
import { User } from './entities/user.entities'

const port = process.env.TYPEORM_PORT as number | undefined
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST,
  port,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [User],
  ssl: true,
})

AppDataSource.initialize()
  .then(() => {
    console.log(
      'Conexão com o banco de dados estabelecida e entidades sincronizadas.',
    )
  })
  .catch((error) =>
    console.log('Erro ao inicializar a conexão com o banco de dados:', error),
  )
