module.exports = {
  Query: {
    breeds: (_, __, { dataSources }) => dataSources.dogAPI.getAllBreeds(),
    images: (_, { breed }, { dataSources }) =>
      dataSources.dogAPI.getImagesByBreed(breed),
    subBreed: (_, { breed }, { dataSources }) =>
      dataSources.dogAPI.getSubBreedsByBreed(breed)
  }
};
