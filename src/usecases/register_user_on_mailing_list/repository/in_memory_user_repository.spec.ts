import { type UserData } from '../user_data';
import { InMemoryUserRepository } from './in_memory_user_repository';

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findUserByEmail('any@mail.com');
    expect(user).toBeNull();
  })

  test('should return exists record if add user', async () => {
    const users: UserData[] = [];
    const name = 'any_name';
    const email = 'any@gmail.com';
    const userRepo = new InMemoryUserRepository(users);
    await userRepo.add({ name, email });
    const exists = await userRepo.exists({ name, email });
    expect(exists).toBe(true);
  })

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = [];
    const name = 'any_name';
    const email = 'any@gmail.com';
    const userRepo = new InMemoryUserRepository(users);
    await userRepo.add({ name, email });
    const user = await userRepo.findUserByEmail(email);
    expect(user.name).toBe('any_name');
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      { name: 'any_name', email: 'any@gmail.com' },
      { name: 'second_name', email: 'second@gmail.com' }
    ];
    const userRepo = new InMemoryUserRepository(users);
    const returnedUsers = await userRepo.findAllUsers();
    expect(returnedUsers.length).toBe(2);
  })
})
