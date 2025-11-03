export interface AppConfig {
  port: number;
  nodeEnv: string;
  isDevMode: boolean;
}

export interface DatabaseConfig {
  host: string;
  username: string;
  password: string;
  database: string;
  ssl?: boolean;
  logging?: boolean;
}
