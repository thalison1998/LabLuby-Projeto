import React from 'react'

import imgSearch from '../../assets/search.svg'
import { InputSearch, LabelSearch } from './styles'

export const Search = ({onChange}) => {
    return (
        <LabelSearch>
            <InputSearch onChange={onChange}/>
            <img src={imgSearch} alt="search"  />
        </LabelSearch>
    )
}
