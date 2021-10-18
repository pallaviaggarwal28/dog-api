const { gql } = require("apollo-server");

const typeDefs = gql`
  type Dog {
    breed: String!
    images: [String]
    subBreed: [String]
  }

  type Breed {
    name: String
    area: [String]
  }

  type Image {
    urls: [String]
  }

  type SubBreed {
    subBreeds: [String]
  }

  type Query {
    breeds: [Breed]
    dog(breed: String!): Dog
    images(breed: String!): Image
    subBreed(breed: String!): SubBreed
  }
`;

module.exports = typeDefs;
