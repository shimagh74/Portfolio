import { FaGithubSquare, FaYoutube, FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithubSquare />,
    path: 'https://github.com/shimagh74'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/shima-ghasemzade'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 text-3xl flex  items-center justify-center  border-lightedYellow text-lightedYellow hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
