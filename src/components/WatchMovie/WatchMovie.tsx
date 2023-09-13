import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

interface IProps {
  movieURL: string,
}

export default function WatchMovie({ movieURL }: IProps) {
  const autoPlayVideo = `${movieURL}?autoplay=1`

  return <div className='fixed top-0 left-0 bottom-0 right-0'>
    <Link href='/' className='fixed top-16 left-10'>
      <FaArrowLeft className='w-8 h-8'/>
    </Link>
    <iframe
      src={autoPlayVideo}
      title="YouTube video player"
      allowFullScreen
      className='w-full h-full'
    ></iframe>
  </div>
}
