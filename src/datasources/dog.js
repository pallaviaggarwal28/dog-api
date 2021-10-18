const { RESTDataSource } = require("apollo-datasource-rest");

class DogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://dog.ceo/api/";
  }

  async getAllBreeds() {
    const response = await this.get("breeds/list/all");
    // const arr = Object.keys(response.message).map(key => [
    //   key,
    //   response.message[key]
    // ]);
    // console.log(arr);
    // return arr.map(breed => this.reducer(breed));
    console.log(response.message);
  }

  async getImagesByBreed({ breed }) {
    const response = await this.get("breed/hound/images");
    return response.message;
  }

  async getSubBreedsByBreed({ breed }) {
    const response = await this.get("breed/hound/list");
    return response;
  }

  breedReducer(breed) {
    return {
      name: breed.key,
      area: breed.value
    };
  }
}

module.exports = DogAPI;
