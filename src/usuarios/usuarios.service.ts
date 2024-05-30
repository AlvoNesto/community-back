import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from '../common/entities/usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usersRepository: Repository<Usuarios>,
  ) {}

  findAll(): Promise<Usuarios[]> {
    return this.usersRepository.find();
  }

  findOne(id_usuario: number): Promise<Usuarios> {
    return this.usersRepository.findOneBy({ id_usuario });
  }

  async remove(id_usuario: number): Promise<void> {
    await this.usersRepository.delete(id_usuario);
  }

  create(user: Usuarios): Promise<Usuarios> {
    return this.usersRepository.save(user);
  }
}
