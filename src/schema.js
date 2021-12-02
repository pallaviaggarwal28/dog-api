const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    urls: [String]
  }

  type Dog {
    breed: ID
    images: Image
    subBreeds: [String]
  }

  type Breed {
    name: String
    area: [String]
  }

  type ImagesByBreedAndSubBreed {
    message: [String]
  }

  type Query {
    breeds: [Breed]
    dog(breed: String!): Dog
    imagesByBreedAndSubBreed(
      breed: String!
      subBreed: String!
    ): ImagesByBreedAndSubBreed
  }
`;

module.exports = typeDefs;
