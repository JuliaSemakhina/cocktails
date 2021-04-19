import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
const {setSearchTerm} = useGlobalContext();
const searchValue = React.useRef('');

  return (
    <h1>hello</h1>
  )
}

export default SearchForm