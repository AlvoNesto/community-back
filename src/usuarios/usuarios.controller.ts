import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from '../common/entities/usuarios.entity';

@Controller('users')
export class UsuariosController {
  constructor(private readonly usersService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuarios[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuarios> {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }
}
