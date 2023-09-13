import { NextPage } from "next"
import { ITrailer } from "@/types"
import { Hero } from "@/components/Hero/Hero"
import MovieList from "@/components/MovieList/MovieList"

async function getMoviesData() {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/api/movies`, {
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
      'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_API_HOST}`
    },
  })

  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }

  return res.json()
}

const MainView: NextPage = async() =>  {
  const data = await getMoviesData()
  const firstMovie: ITrailer = data.results[0]

  return (
    <>
      <Hero id={firstMovie._id}/>
      <div className='-mt-40 px-10'>
        <MovieList movieList={data.results}/>
      </div>
    </>
  )
}

export default MainView
