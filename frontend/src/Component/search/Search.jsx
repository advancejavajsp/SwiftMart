import React from 'react';
import style from './search.module.css';


const Search = () => {
  return (
    <div>
    <section>
      

      <div className={style["cont"]}>
      <div className={style["container1"]}><p>cream milk</p></div>
      <div className={style["container1"]}><p>amul milk</p></div>
      <div className={style["container1"]}><p>cow milk</p></div>
      </div>
     
      
    </section>
    <div className={style["show"]}>
          <h5>Showing results for "milk"</h5>
      </div>
      </div>
  );
};

export default Search;
