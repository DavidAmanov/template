import SearchCss from './SearchCss.module.css'
import searchsvg from '../../img/search.svg'

const Search = () => {
    return(
        <>
            <label htmlFor="search" className={SearchCss.search__label}>
                <div className={SearchCss.search__div}>
                    <img className={SearchCss.searchLogo} src={searchsvg} alt="search" />
                    <input id='search' className={SearchCss.search} placeholder="Hi, try to find something" />
                </div>
            </label>
        </>
    )
}

export default Search