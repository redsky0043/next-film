import {Metadata} from "next"
import {ITrailerData} from "@/types"
import WatchMovie from "@/components/WatchMovie/WatchMovie"
import { getTrailersData } from "@/hooks/getData"

interface IProps {
  params: {
    id: string,
  }
}


export async function generateMetadata({ params: { id }}: IProps): Promise<Metadata> {
  const movie: ITrailerData = await getTrailersData(id)
  const title = movie.result[0].title
  const description = movie.result[0].description

  return {
    title,
    description,
  }
}

export default async function MoviePage({ params: { id }}: IProps) {
  const movie: ITrailerData = await getTrailersData(id)
  const movieURL = movie.result[0].embed

  return <WatchMovie movieURL={movieURL}/>
}
