import Link from "next/link"
import { FaPlay, FaInfoCircle } from "react-icons/fa"

interface IProps {
  text: string,
  href?: string,
  isMain?: boolean,
}

const Button = ({
    text,
    href,
    isMain,
  }: IProps) => {
  return href ? (
    <Link href={href}>
      <button className={`flex items-center justify-center gap-4 py-3 px-8 rounded-md w-64 ${
          isMain
            ? "text-black bg-white hover:bg-gray-300"
            : "text-white bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)]"
        }`}
      >
        {isMain ? <FaPlay className="w-6 h-6" /> : <FaInfoCircle className="w-6 h-6" />}
        <span className="font-medium text-xl">
          {text}
        </span>
      </button>
    </Link>
  ) : (
    <button className={`flex items-center justify-center gap-4 py-3 px-8 rounded-md w-64 ${
        isMain
          ? "text-black bg-white hover:bg-gray-300"
          : "text-white bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)]"
      }`}
    >
      {isMain ? <FaPlay className="w-6 h-6" /> : <FaInfoCircle className="w-6 h-6" />}
      <span className="font-medium text-xl">
        {text}
      </span>
    </button>
  )
}

export default Button
