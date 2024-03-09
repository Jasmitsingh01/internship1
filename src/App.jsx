import { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import {GetCardData} from './services/data'; // Calling function where actuall call the api 
import Card from './components/Card';
function App() {
  const [search, setsearch] = useState('')
  const [Data,setData]=useState([]);
useEffect(()=>{
  GetCardData().then((respons)=>{
     setData(()=>[...respons]) // setting The state I push Data in exits Data by doing this prve data not vanshied
  });
    
},[])
  return (
    <>
     <div className=' bg-blue-500 p-3 flex justify-center'>
    <input type="text" value={search} placeholder='Seacrch' onChange={(e)=>setsearch( e.target.value)} className='w-1/2  md:w-1/4 outline-none border-2 rounded-md py-2 px-5 ' />
    <button className=' rounded-md -ms-5'><CiSearch/></button>
     </div>
    <div className=' grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 '>
    {
   Data
   .filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
   .map((item)=>(
     <Card key={item.id}  name={item.name} img={item.image_url} discription={item.description} tagline={item.tagline} contributer={item.contributed_by}/>
   ))

}
    </div>
    </>
  )
}

export default App
