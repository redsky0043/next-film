import {ITrailer} from "@/types"
import Button from "@/components/Button/Button"

interface IProps {
  movieId: string,
  trailer: ITrailer,
}

export default function HeroMovie({ trailer, movieId }: IProps) {
  const { embed, title } = trailer

  const autoPlayVideo = `${embed}?autoplay=1&mute=1`

  return (
    <div className='min-h-screen h-screen'>
      <iframe
        src={autoPlayVideo}
        className='w-full h-full bg-gradient-to-b from-transparent via-gray-100 to-gray-900'
        title="YouTube video player"
      ></iframe>
      <div className='absolute top-1/2 px-10'>
        <div className='mb-8 text-5xl max-w-2xl'>
          {title}
        </div>
        <div className='flex gap-4'>
          <Button text='Watch' isMain href={`/watch/${movieId}`}/>
          <Button text='More'/>
        </div>
      </div>
    </div>
  )
}
