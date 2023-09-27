import React, { useEffect, useState } from 'react'

const Filter = ({filterdata,setcategory}) => {
  const [active, setactive] = useState(  {
    id: "1",
    title: "All",
  })
 useEffect(()=>{
  console.log(active.title);
  setcategory(active.title);
 },active)
  return (
    <div>
    <div className="flex justify-center item-center mt-10 gap-3 flex-wrap">
    {
        filterdata.map((ele)=>{
            return (
                <button key={ele.id} className={`pt-2 pb-2 pl-4 pr-4 text-white ${(active.id === ele.id)?"bg-[#ef476f]":"bg-richblue-200"} bg  hover:bg-[#ef476f] rounded-lg`} 
                onClick={() => {setcategory(ele.title);setactive(ele)}}>{ele.title}</button>
            );
        })
    }
    </div>  
    </div>
  )
}

export default Filter