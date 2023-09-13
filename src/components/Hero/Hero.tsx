import { ITrailer, ITrailerData } from "@/types"
import { getTrailersData } from "@/hooks/getData"
import HeroMovie from "@/components/HeroMovie/HeroMovie"


interface IProps {
  id: string,
}

export async function Hero ({ id }: IProps) {
  const trailer: ITrailerData = await getTrailersData(id)
  const firstTrailer: ITrailer = trailer.result[1]

  return (
    <div className='min-h-screen bg-black relative'>
      <div className='bg-black w-full h-16 absolute'></div>
      <HeroMovie trailer={firstTrailer} movieId={id} />
    </div>
  )
}
