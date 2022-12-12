import mongoose from 'mongoose';

const dbUri = (): string => String(process.env.DB_URI);

export const connect = async () => {
  mongoose.set('strictQuery', false);

  await mongoose.connect(dbUri()).catch(err => console.log(err));
};
