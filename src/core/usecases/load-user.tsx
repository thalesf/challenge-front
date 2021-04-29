import { User } from '@/core/entities/user';
export interface LoadUserItem {
  getUser(): Promise<User>
}
