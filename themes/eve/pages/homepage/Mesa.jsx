import React from "react";
import  "./Mesa.scss";

function FreeShippingBar() {
  console.log("Mesa");
  console.log(screen.width);
  if(screen.width < 768){
    window.location.href = "/categories";
  }
  return (
    <div className="mesa">
      <div className="mesa__p1">
        <div className="item item1">
          <a href={"/category/flores"}>
            <img src="/cubo.png" alt="mesa1" height={160} width={160}/>
            <label>cubo</label>
          </a>
        </div>
        <div className="item item2">
          <a href={"/categories"} >
            <img src="/arbol.png" alt="mesa1" height={160} width={160}/>
            <label>arbol</label>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
