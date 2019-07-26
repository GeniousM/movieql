import {
  people,
  movie,
  getById,
  getByID,
  getMovies,
  addMovie,
  deleteMovie
} from "./db";

// const jayson = {
//   name: "Jayson",
//   age: "29",
//   gender: "male"
// };

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating)
    // movie: (_, { id }) => getByID(id)
  },
  Mutation: {
    addMovie: (_, { title, id }) => addMovie(title),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
  // name: () => "jayson"
  // person: () => jayson
  /* same as
    person: function() {
      return jayson
    }
    */

  /*
    people: () => people,
    person: (_, { id }) => getById(id)
    // {
    //   console.log(args);
    // }
    */
};

export default resolvers;
