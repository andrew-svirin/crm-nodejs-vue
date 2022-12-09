import mongoose from 'mongoose';

export const connect = async () => {
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(String(process.env.DB_URI))
    .catch(error => console.log(error));
};
