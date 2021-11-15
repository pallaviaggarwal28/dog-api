const { RESTDataSource } = require("apollo-datasource-rest");

class DogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://dog.ceo/api/";
  }

  static getImagePath({ breed }) {
    return `/breed/${breed}/images/random`;
  }

  static getSubBreedPath({ breed }) {
    return `/breed/${breed}/list`;
  }

  async getImagesByBreed({ breed }) {
    console.log(breed);
    const response = await this.get(DogAPI.getImagePath({ breed }));
    return response.message;
  }

  async getSubBreedsByBreed({ breed }) {
    const response = await this.get(DogAPI.getSubBreedPath({ breed }));
    return response.message;
  }

  async getAllBreeds() {
    const response = await this.get("breeds/list/all");
    const data = response.message;
    console.log(data);
    return Promise.all(
      Object.keys(data).map(async key => {
        return {
          name: key,
          area: data[key]
        };
      })
    );
  }

  async getDog({ breed }) {
    return {
      breed: breed,
      images: await this.getImagesByBreed({ breed: breed }),
      subBreed: await this.getSubBreedsByBreed({ breed: breed })
    };
  }
}

module.exports = DogAPI;
