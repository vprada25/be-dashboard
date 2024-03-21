import { ReactNode } from 'react'

import './Card.css'

type CardProps = {
  children?: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <div className='card-container'>{children}</div>
}

export default Card
