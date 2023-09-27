import React from 'react'
import Card from './Card'

const Cards = (props) => {
    
    let courseData = props.courseData;

    function getCourses() {
      if(props.category === "All")
      {
      
      let mainCourseData = [];
      
      Object.values(courseData).forEach((category) => {
        category.forEach((course) => {
          mainCourseData.push(course);
        });
      });
      console.log(mainCourseData)
      return mainCourseData;
      }
      else
        return courseData[props.category];
    }

  return (
    <div className='max-w-screen-xl ml-auto mr-auto mt-10 pb-10 flex justify-evenly flex-wrap gap-6'>
       
       {
        
        getCourses().map((ele,ind)=>{
        return <Card ele={ele } index={ind}/>
       })
       }

    </div>
  )
}

export default Cards