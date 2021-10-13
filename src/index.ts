"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");

const dogs = [
  {
    hound: {
      breed: "hound",
      image: "img1",
      subBreeds: ""
    },
    test: {
      breed: "test",
      image: "img2",
      subBreeds: ""
    }
  }
];

const app = Fastify();

const schema = `
type Dog {
    breed: String!
    image: [String]
    subBreeds: [String]
}

type Breed {
    breedType: String
    breedSubType: [String]
}

type Query {
    getDog(breed: String!): Dog
    allBreeds: [Breed]
}
`;

const resolvers = {
  Query: {
    getDog: (_, { breed }) => {
      return dogs[breed];
    }
  }
};

app.register(mercurius, {
  schema,
  resolvers
});

app.get("/", async function (req, reply) {
  const query = "{ getDog(breed: hound) }";
  console.log(query);
  return reply.graphql(query);
});

app.listen(3000);
