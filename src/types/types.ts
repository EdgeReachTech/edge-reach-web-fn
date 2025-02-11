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

export interface CardType {
  comments: string[];
  description: string;
  image: string;
  likes: number;
  title: string;
  userId: string;
  createdAt: string;
  _id: string;
}
