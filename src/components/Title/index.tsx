import React from 'react'

interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
  )
}

export default Title
