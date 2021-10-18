const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const DogAPI = require("./datasources/dog");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    dogAPI: new DogAPI()
  })
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
