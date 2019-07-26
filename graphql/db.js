import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

// export let movies = [
//   {
//     id: 1,
//     title: "toy story",
//     genre: "",
//     year: "",
//     director: "",
//     rate: ""
//   },
//   {
//     id: 2,
//     title: "star wars",
//     genre: "",
//     year: "",
//     director: "",
//     rate: ""
//   },
//   {
//     id: 3,
//     title: "iron man",
//     genre: "",
//     year: "",
//     director: "",
//     rate: ""
//   },
//   {
//     id: 4,
//     title: "avengers",
//     genre: "",
//     year: "",
//     director: "",
//     rate: ""
//   },
//   {
//     id: 5,
//     title: "shawshank redemption",
//     genre: "",
//     year: "",
//     director: "",
//     rate: ""
//   },
//   {
//     id: 0,
//     title: "jumanji",
//     genre: "",
//     year: "",
//     director: "",
//     rate: ""
//   }
// ];

export const people = [
  {
    id: 1,
    name: "Jayson",
    age: "29",
    gender: "male"
  },
  {
    id: 2,
    name: "Mike",
    age: "29",
    gender: "male"
  },
  {
    id: 3,
    name: "Daniel",
    age: "29",
    gender: "male"
  },
  {
    id: 4,
    name: "Jasmin",
    age: "29",
    gender: "male"
  },
  {
    id: 0,
    name: "Anna",
    age: "29",
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};

export const getByID = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;

  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
// fetch(`${API_URL}`)
//   .then(res => res.json())
//   .then(json => json.data.movies);

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (cleanedMovies.length < movies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (title, genre) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    title,
    genre
    // ,
    // year,
    // director
  };
  movies.push(newMovie);
  return newMovie;
};
