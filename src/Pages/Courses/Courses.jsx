import React from 'react'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import Cards from './Cards'



import {filterData,apiUrl} from './data.jsx'

const Courses = () => {
  const [courseData, setcourseData] = useState([]);
  const [category, setcategory] = useState(filterData[0].title)
  useEffect(() => {
    
      const fetchData = async() => {
          try {
              const res = await fetch(apiUrl);
              const output = await res.json();                             
              setcourseData(output.data);
            } catch (error) {
              alert("Ooops! something went wrong...")
            }
      } 
      // calling the function to fetch the data
      fetchData();
  }, [])
  
return (
  <div className='min-h-screen bg-[#000814]'>



      <Navbar></Navbar>
      <Filter filterdata={filterData} setcategory={setcategory}></Filter>
      <Cards courseData={courseData} category={category}>
          
      </Cards>
  </div>
)
}

export default Courses