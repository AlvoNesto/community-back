import { Controller, Get, UseGuards, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from '../common/entities/usuarios.entity';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
export class UsuariosController {
  constructor(private readonly usersService: UsuariosService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Usuarios[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuarios> {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }
}
