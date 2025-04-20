export interface AuthToken {
  token: string;
}

export interface AuthUserCredentials {
  username: string,
  password: string,
}

export interface SignUpCredentials {
  username: string,
  password: string,
  email: string,
}
