const { default: axios } = require("axios");
const Movie = require("../Model/Movie");
const sleep = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
async function ConvertMovie_NowPlayingByPage(PageTotal) {
  for (let i = 1; i <= PageTotal; i++) {
    console.log("Converting item " + i);
    // console.log(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=bec721bcb126b9938b6c2f7b39448c63&page=${i}`
    // );
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=bec721bcb126b9938b6c2f7b39448c63&page=${i}`
    );
    let { results } = data;
    // console.log(results);
    for (let j = 0; j < results.length; j++) {
      let movie = new Movie({
        UpComming: false,
        id: results[j].id,
        title: results[j].title,
        release_date: results[j].release_date,
        overview: results[j].overview,
        genre_ids: results[j].genre_ids,
        original_title: results[j].original_title,
        popularity: results[j].popularity,
        page: i,
      });
      try {
        let resultSaveProgress = await movie.save();
      } catch (e) {
        console.log(e, 29 + "Convert.js");
      }
    }

    sleep(3000);
  }
}

async function ConvertMovie_UpCommingByPage(PageTotal) {
  for (let i = 1; i <= PageTotal; i++) {
    console.log("Converting item " + i);
    // console.log(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=bec721bcb126b9938b6c2f7b39448c63&page=${i}`
    // );
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=bec721bcb126b9938b6c2f7b39448c63&page=${i}`
    );
    let { results } = data;
    // console.log(results);
    for (let j = 0; j < results.length; j++) {
      let movie = new Movie({
        UpComming: false,
        id: results[j].id,
        title: results[j].title,
        release_date: results[j].release_date,
        overview: results[j].overview,
        genre_ids: results[j].genre_ids,
        original_title: results[j].original_title,
        popularity: results[j].popularity,
        page: i,
      });
      try {
        let resultSaveProgress = await movie.save();
      } catch (e) {
        console.log(e, 29 + "Convert.js");
      }
    }

    sleep(3000);
  }
}

async function MainRun() {
  let Movie_NowPlaying = await ConvertMovie_NowPlayingByPage(1);
  console.log("Convert Complete");
}

module.exports = {
  ConvertMovie_NowPlayingByPage,
  MainRun,
  ConvertMovie_UpCommingByPage,
};
