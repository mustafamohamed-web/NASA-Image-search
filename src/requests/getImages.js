import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;

        const parseImages = imageResults.filter(
          (data) => data.data[0].media_type === "image"
        );
        const images = parseImages.map((image) => image.links[0].href);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
