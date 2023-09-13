export interface IMovieGenre {
  name: string,
  uuid: string,
}

export interface IMovie {
  _id: string,
  image: string,
  title: string,
  rating: string,
  year: string,
  description: string,
  titleOriginal: string,
  genres: IMovieGenre[],
}

export interface ITrailer {
  _id: string,
  type: string,
  thumbnail: string,
  videoId: string,
  title: string,
  description: string,
  image: string,
  embed: string,
}

export interface ITrailerData {
  result: ITrailer[],
}

export interface IFavorites {
  favorites: IMovie[],
}
