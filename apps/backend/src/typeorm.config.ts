import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'mamidelice',
  entities: [User],
  synchronize: true,
};

export default config;
