import React, { useState } from 'react'
import './Search.css'

export interface SearchProps {
  value: string,
  input: (e: string) => void,
  className?: string
}

function Search(props: SearchProps) {
  const [searchString, setSearchString] = useState(props.value)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
    props.input(searchString)
  }

  return (
    <div className={`${props.className} search`}>
        <input type="text" value={searchString} onChange={onChange} />
        <i className='fa fa-search'></i>
    </div>
    
  )
}

export default Search
