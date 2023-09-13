import {NextPage} from "next";
import {useRouter} from "next/router";

const Film: NextPage = () =>  {

  const { pathname, asPath } = useRouter()

  console.log('useRouter :', useRouter)

  return (
    <p>
      Film page
    </p>
  )
}

export default Film
