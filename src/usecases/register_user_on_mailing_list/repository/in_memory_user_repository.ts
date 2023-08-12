import { type UserRepository } from '../ports/user_repository';
import { type UserData } from '../user_data';

export class InMemoryUserRepository implements UserRepository {
  private readonly repository: UserData[];

  constructor (repository: UserData[]) {
    this.repository = repository;
  }

  async add (user: UserData): Promise<void> {
    throw new Error('Method not implemented');
  };

  async findUserByEmail (email: string): Promise<UserData> {
    return null;
  };

  async findAllUsers (): Promise<UserData[]> {
    return [];
  };

  async exists (user: UserData): Promise<boolean> {
    return false;
  };
}
