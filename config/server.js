module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    /** production configuration */
    return {
      host: env("HOST"),
      port: env.int("PORT_PRODUCTION"),
      app: {
        keys: env.array("APP_KEYS"),
      },
      url: env("URL_PRODUCTION"),
    };
  } else {
    /** development configuration */
    return {
      host: env("HOST"),
      port: env.int("PORT_DEVELOPMENT", 1337),
      app: {
        keys: env.array("APP_KEYS"),
      },
    };
  }
};
