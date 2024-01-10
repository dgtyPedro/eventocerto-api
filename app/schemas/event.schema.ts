import { createSchema } from "graphql-yoga";
import { typeDefs } from "../typeDefs/event.typedef";
import { resolvers } from "../resolvers/event.resolver";

export const schema = createSchema({
  typeDefs,
  resolvers,
});
