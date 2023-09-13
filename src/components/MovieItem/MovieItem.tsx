import {FC} from 'react'
import Link from "next/link"
import {IMovie} from "@/types"
import Image from "next/image"
import {FaPlus, FaPlayCircle, FaHeart, FaChevronDown} from "react-icons/fa"

import styles from './MovieItem.module.scss'

interface IProps {
  data: IMovie
}

const MovieItem: FC<IProps> = ({data}) => {
  const {
    _id,
    genres,
    year = 'default year',
    image = 'default image',
    rating = 'default rating',
    titleOriginal = 'default title',
  } = data

  const ratingValue = Number(rating.split('/')[0])

  const ratingColor = ratingValue >= 7 ? 'text-green-400' : ratingValue > 4 ? 'text-yellow-400' : 'text-red-400'

  return (
    <div className='relative'>
      <div className={`bg-black overflow-hidden grid grid-rows-[150px,1fr] rounded-md group ${styles.MovieItem}`}>
        <div className='w-full'>
          <Image
            src={image}
            width={100}
            height={200}
            alt={titleOriginal}
            className='w-full h-full object-cover object-top'
          />
        </div>
        <div className='bg-black p-4 font-light grid grid-cols-2 gap-4 items-center place-content-between hidden group-hover:grid'>
          <div className='col-span-2 flex gap-2'>
            <div className='w-7 cursor-pointer hover:opacity-80'>
              <Link href={`/watch/${_id}`}>
                <FaPlayCircle className='w-full h-full'/>
              </Link>
            </div>
            <div className='w-7 border rounded-full grid place-items-center cursor-pointer hover:opacity-80'>
              <FaPlus className='w-3/5 h-3/5'/>
            </div>
            <div className='w-7 border rounded-full grid place-items-center cursor-pointer hover:opacity-80'>
              <FaHeart className='w-2/4 h-2/4'/>
            </div>
            <div className='w-7 border rounded-full grid place-items-center cursor-pointer hover:opacity-80 ml-auto'>
              <FaChevronDown className='w-3/5 h-3/5'/>
            </div>
          </div>
          <h3 className='col-span-2 font-semibold truncate line-clamp-1'>
            {titleOriginal}
          </h3>
          <p className={`p-1 border w-auto justify-self-start text-xs ${ratingColor}`}>
            {rating}
          </p>
          <p className='text-right opacity-60'>
            {year}
          </p>
          <ul className='col-span-2 flex gap-x-2 gap-y-1 flex-wrap'>
            {genres.map((genre, index) => (
              <li key={genre.uuid} className='flex gap-2 items-center'>
                <span className='font-light text-xs'>
                  {genre.name}
                </span>
                <span className={`${genres.length - 1 === index ? 'hidden' : 'w-1 h-1 bg-gray-500 inline-block rounded-full'}`}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
