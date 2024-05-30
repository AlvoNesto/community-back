import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Usuarios } from '../common/entities/usuarios.entity';
import { RegisterUserDto } from './dtos/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuarios)
    private usersRepository: Repository<Usuarios>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOneBy({ username });
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerUser: RegisterUserDto): Promise<void> {
    const hashedPassword = await bcrypt.hash(registerUser.password, 10);
    const usuario = new Usuarios();
    usuario.nombre = registerUser.nombre;
    usuario.apellido = registerUser.apellido;
    usuario.username = registerUser.username;
    usuario.password = hashedPassword;
    await this.usersRepository.save(usuario);
  }
}
