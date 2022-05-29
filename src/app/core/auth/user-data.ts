import { AuthData } from './auth-data';

export interface UserData extends AuthData {
  displayName: string;
}
