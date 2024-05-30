import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuarios } from '../common/entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
