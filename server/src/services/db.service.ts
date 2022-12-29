import mongoose from 'mongoose';

export namespace Db {
  export const dbUri = (): string => String(process.env.DB_URI);

  export const connect = async (): Promise<void> => {
    mongoose.set('strictQuery', false);

    await mongoose.connect(dbUri()).catch(err => console.log(err));
  };

  export const disconnect = async (): Promise<void> => await mongoose.connection.close();
}

export const resolveTablePage = (page: any): number => {
  let tablePage = Number(page) - 1;

  if (tablePage < 0) {
    tablePage = 0;
  }

  return tablePage;
};
