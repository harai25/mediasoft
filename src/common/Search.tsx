import React from 'react'
import './Search.css'

export interface SearchProps {
  value: string,
  input: (e: string) => void,
  className?: string
}

function Search(props: SearchProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.input(event.target.value)
  }

  return (
    <div className={`${props.className} search`}>
        <input type="text" value={props.value} onChange={onChange} />
        <i className='fa fa-search'></i>
    </div>
    
  )
}

export default Search
