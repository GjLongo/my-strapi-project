const parse = require('pg-connection-string').parse;
    const config = parse(process.env.postgres://arilzsteffkupm:eba2de5dc6b477b2b3689f1bec08b6741646b34f9314ac30babe83bd2d85104f@ec2-79-125-30-28.eu-west-1.compute.amazonaws.com:5432/dbdqacc0tlt4r4);
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      },
    });