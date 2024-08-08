import SearchCss from "./SearchCss.module.css";
import searchsvg from "../../img/search.svg";
import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const catalogItems = useSelector((state: RootState) => state.catalog.items);
  const [filtredItems, setFiltredItems] = useState<Product[]>([]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (query) {
      setFiltredItems(
        catalogItems.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else if (!query) {
      setFiltredItems([]);
    }
  }, [query]);
  return (
    <>
      <label htmlFor="search" className={SearchCss.search__label}>
        <div className={SearchCss.search__grid}>
          <div className={SearchCss.search__div}>
            <input
              id="search"
              className={SearchCss.search}
              placeholder="Hi, try to find something"
              value={query}
              onChange={handleSearch}
            />
            <img
              className={SearchCss.searchLogo}
              src={searchsvg}
              alt="search"
            />
          </div>
          {filtredItems.length > 0 && (
            <div className={SearchCss.catalog}>
              {filtredItems.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <div className={SearchCss.catalog__items}>
                    <img src={item.img} alt="item img" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </label>
    </>
  );
};

export default Search;
