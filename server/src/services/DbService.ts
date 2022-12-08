import mongoose from 'mongoose';

export function getDbUri (): string {
  // TODO. Move data to config.
  return 'mongodb://admin:password@db-crm-nodejs-vue:27017/crm';
}

export async function connect () {
  mongoose.set('strictQuery', false);
  await mongoose.connect(getDbUri()).catch(error => console.log(error));
}
