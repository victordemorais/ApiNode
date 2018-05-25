import { makeExecutableSchema } from "graphql-tools";
const Users: any[] = [
  {
    id: 1,
    name: "jon",
    email: "jon@email.com"
  },
  {
    id: 2,
    name: "jonjon",
    email: "jonjon@email.com.br"
  }
];
const typeDefs = `
    type User{
        id:ID!
        name: String!
        email: String!
    }
    type Query{
        allUsers:[User!]!
    }
    
`;
const resolvers = {
  Query: {
    allUsers: () => []
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });
