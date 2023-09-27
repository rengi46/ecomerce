import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo.svg" height={50} width={50} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
