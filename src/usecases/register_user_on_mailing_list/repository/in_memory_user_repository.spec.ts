import { type UserData } from '../user_data';
import { InMemoryUserRepository } from './in_memory_user_repository';

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findUserByEmail('any@mail.com');
    expect(user).toBeNull();
  })
})
