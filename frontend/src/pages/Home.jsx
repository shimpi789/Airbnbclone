import React,{useContext} from 'react'
import Nav from '../Component/Nav'
import { listingDataContext } from '../Context/ListingContext'
import Card from '../Component/Card'

function Home() {
  let {listingdata,setListingData,newListData} = useContext(listingDataContext)
  return (
    <div>
      <Nav />
      <div className='w-[100vw] h-[77vh] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px]'>
          {newListData.map((list)=>(
            <Card  title={list.title} 
            landmark={list.landmark}
             city={list.city} 
             image1={list.image1} 
              image2={list.image2}  
              image3={list.image3}
            rent={list.rent}
             id={list._id}
             ratings={list.ratings} isBooked={list.isBooked} host={list.host}/>)
          )} 

      </div>
    </div>
  )
}

export default Home