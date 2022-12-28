export const profileSchema = {
  type: 'object',
  required: ['_id', 'user', 'firstName', 'lastName'],
  properties: {
    _id: {
      type: 'string',
    },
    user: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    birthday: {
      type: 'string',
    },
  }
};
