const resolvers = {
  Query: {
    breeds: async (_, __, { dataSources }) => dataSources.dogAPI.getAllBreeds(),
    dog: async (_, { breed }, { dataSources }) => {
      return dataSources.dogAPI.getDog({ breed });
    },
    imagesByBreedAndSubBreed: async (
      _,
      { breed, subBreed },
      { dataSources }
    ) => {
      return dataSources.dogAPI.getImagesByBreedAndSubBreed({
        breed,
        subBreed
      });
    }
  },
  Dog: {
    images: ({ breed }, _, { dataSources }) => {
      return dataSources.dogAPI.getImagesByBreed({ breed });
    }
  }
};

module.exports = resolvers;
