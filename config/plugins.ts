export default ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET','jXY7m9XqB5ATBHRcxyClkg=='),
      },
    },
  });
  