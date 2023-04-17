import axios from "axios";

export const getPlacesData = async(type,sw,ne)=>{
    try {
        const { data : { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': 'a994ba709cmsh47523b9a81dade2p18a25bjsn50dbd4d9360c',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              });
        return data;
    } catch(error){

        console.log(error)
    }
}


export const getWeathherData = async()=>{
  try{
    const { data } = await axios.get('https://open-weather13.p.rapidapi.com/city/landon',{
      
    })
  }catch(error){

  }
}