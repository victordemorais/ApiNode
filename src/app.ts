import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";
class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleare();
  }
  private middleare(): void {
    this.express.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: process.env.NODE_ENV.trim() === "development"
      })
    );
  }
}
export default new App().express;
