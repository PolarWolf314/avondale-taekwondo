import React from "react";

const Logo = () => {
  return (
    <>
      <a className="flex flex-row gap-2 p-4 items-center w-fit" href="/">
        <span className="font-display font-bold tracking-tight text-xl">
          Avondale Taekwon-Do
        </span>
        <img
          src="/assets/avondale_taekwondo_logo.png"
          alt="The Avondale Taekwon-Do logo. It is a black circle with white text and imagery. The word Avondale is at the top, and Taekwon-Do on the bottom. In the center of the circle is a silhouette of a man in uniform performing a turning kick"
          className="h-8"
        />
      </a>
    </>
  );
};
export default Logo;
