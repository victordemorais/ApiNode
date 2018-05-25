"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const Users = [
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
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
