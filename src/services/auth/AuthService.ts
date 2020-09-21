export interface AuthResponse {
  authenticated: boolean;
}

export interface AuthService {
  login(): Promise<AuthResponse>;
}
