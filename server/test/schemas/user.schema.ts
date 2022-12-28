export const userSchema = {
  type: 'object',
  required: ['_id'],
  properties: {
    _id: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
    email: {
      type: 'string',
    }
  }
};

export const usersSchema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['_id'],
    properties: {
      _id: {
        type: 'string',
      },
      username: {
        type: 'string',
      },
      email: {
        type: 'string',
      }
    }
  }
};
