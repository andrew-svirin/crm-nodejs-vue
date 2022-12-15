import dotenv from 'dotenv';

export namespace Config {
  const envPath = (): string => {
    return process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
  };

  export const load = () => dotenv.config({path: envPath()});
}


