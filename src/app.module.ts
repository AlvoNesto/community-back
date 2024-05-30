import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
const ormconfig = require('../ormconfig.json');

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UsuariosModule,
    AuthModule,
  ],
})
export class AppModule {}
