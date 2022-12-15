import mongoose from 'mongoose';

export namespace Db {
  export const dbUri = (): string => String(process.env.DB_URI);

  export const connect = async () => {
    mongoose.set('strictQuery', false);

    await mongoose.connect(dbUri()).catch(err => console.log(err));
  };

  export const disconnect = async () => {
    await mongoose.connection.close();
  };
}

export const resolveTablePage = (page: any) => {
  let tablePage = Number(page) - 1;

  if (tablePage < 0) {
    tablePage = 0;
  }

  return tablePage;
};
