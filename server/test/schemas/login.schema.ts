export const authSchema = {
  type: 'object',
  required: ['token'],
  properties: {
    token: {
      type: 'string',
    },
  }
};
