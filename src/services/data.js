import axios from "axios"

async function  GetCardData(){

// fecth The data 
 const data= await axios.get('https://api.punkapi.com/v2/beers')  // I used async because when user fecth sometime It take Time so this resason I used async and await
             .then((response)=>{
                        return response.data
              })
              .catch((err)=>{
                return err.message
              });

  return data;
}




export {GetCardData} ;