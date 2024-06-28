import SearchCss from './SearchCss.module.css'

const Search = () => {
    return(
        <>
            <label htmlFor="search" className={SearchCss.search__label}>
                <img src="../../img/search.svg" alt="search" />
                <input id='search' className={SearchCss.search} placeholder="Hi, try to find somethig" />
            </label>
        </>
    )
}

export default Search