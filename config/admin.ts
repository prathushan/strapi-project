export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','xKk5USTobBtlXhCvvXI7MA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','MCL3km0iE+xQp/JLF6ovMQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','defaultTransferSalt'),
    },
  },
  
flags: {
  nps: env.bool('FLAG_NPS', true),
  promoteEE: env.bool('FLAG_PROMOTE_EE', true),
},

});
