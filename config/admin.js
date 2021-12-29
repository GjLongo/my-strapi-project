module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e7ca7dcf70b2369d13d1328b144ae389'),
  },
});
