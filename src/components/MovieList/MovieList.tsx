import { IMovie } from "@/types"
import MovieItem from "@/components/MovieItem/MovieItem"

interface IProps {
  movieList: IMovie[],
}

const MovieList = ({ movieList = [] }: IProps) => {
  return (
    <ul className='grid gap-2 grid-cols-6'>
      {movieList.map((movie, index) => {
        return <MovieItem key={movie._id} data={movie}/>
      })}
    </ul>
  )
}

export default MovieList
