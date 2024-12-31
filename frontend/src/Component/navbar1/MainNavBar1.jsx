import React, { useContext, useState } from "react";
import style from "../navbar1/MainNavbar1.module.css";
import { globalvar } from "../../GlobalContext/GlobalContext";

const MainNavBar1 = () => {
  const { allCategory, setCategoryId } = useContext(globalvar);
  // const [render, setRender] = useState(false);


  const categoryArray = Object.values(allCategory);
  
  const size = categoryArray.length;


  const categoryPart = categoryArray.slice(0, 6);

  const categoryRemaining = categoryArray.slice(6);


  // if (size < 6) {
  //   setRender(true);
  // }

  return (
    <nav className={style["navbar1"]}>
      <div className={style["nav-links"]}>
        <ul>
          {categoryPart.map((ele, index) => (
            <li key={index} onClick={() => setCategoryId(ele.categoryId)}>
              {ele.name}
            </li>
          ))}
        </ul>

        {size > 6 && (
          <select className={style["dropdown"]}   onChange={(e) => setCategoryId(e.target.value)}>
            <option value="">Select a category</option>
            {categoryRemaining.map((ele) => (
              <option key={ele.categoryId} value={ele.categoryId}>
                {ele.name}
              </option>
            ))}
          </select>
        )}
        
      </div>
    </nav>
  );
};

export default MainNavBar1;







