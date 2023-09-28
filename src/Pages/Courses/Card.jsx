import React, { useState } from "react";
import { FcLike } from "react-icons/fc";


const Card = ({ ele,index }) => {
  const [descriptionState, setdescriptionState] = useState(false)
  const [liked, setliked] = useState(false)
  const readClickHandeler = () => {
    if (descriptionState === false) {
      setdescriptionState(true);
    }
    else
      setdescriptionState(false);
  };

  return (
    <div className="course-container max-w-xs rounded-lg pb-4 bg-[#161d29] transition hover:scale-105 shadow-white-500/40">
      <div className="img-sec relative">
        <img
          className="relative rounded-t-lg"
          src={ele.image.url}
          alt={ele.image.alt}
        />
        <div
          className="like-btn rounded-full bg-white h-14 w-14 flex justify-center items-center z-10 absolute -bottom-5 right-3 cursor-pointer transition hover:scale-90"  onClick={()=> {
            return liked?setliked(false):setliked(true);
            
            }}        
        >
          <div className={`h-14 w-14 ${liked?"bg-[#00000000] hidden":"bg-[#00000064] block"}  rounded-full absolute top-0 left-0 `}></div>
          <FcLike className="h-7 w-7"></FcLike>
        </div>
      </div>
      <h1 className="text-white text-center mt-7 p-3 pb-0 text-xl font-semibold">
        {ele.title}
      </h1>
      <p className="text-white mt-1 p-3 text-center">{descriptionState?ele.description:`${ele.description.slice(0, 70)} .... `}</p>
      <div className="button-sec w-full text-center mt-2">
        <button className={`p-9 pt-3 pb-3 text-black  rounded-md text-lg font-medium ${!(index%2)?"bg-yellow-50 text-black":"bg-[#ef476f] text-white"} hover:scale-95 transition`} onClick={readClickHandeler}>
          
          {descriptionState?"Read Less":"Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
