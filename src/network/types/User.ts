export type UserRole = 'CADET' | 'NOVICE' | 'ADMIN';

export type User = {
  id: number;
  nickname: string;
  oauthToken: string;
  isAuthenticated: boolean;
  lastLogin: Date;
  role: UserRole;
  character: number;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
