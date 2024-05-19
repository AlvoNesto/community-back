import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UserController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "Alvaro Narváez"', () => {
      expect(usersController.getUser()).toBe('Alvaro Narváez');
    });
  });
});
