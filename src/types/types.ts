// types.d.ts
export interface AuthState {
  token: string | null;
  user: User | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
