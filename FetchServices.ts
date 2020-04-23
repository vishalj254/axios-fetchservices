import axios from 'axios';
const BaseURL='http://localhost:3000'

const postDataAxios=async(url:String,body:Object,config:Object={'content-type':"application/json;charset=utf-8"})=>{
  try {
    var response=await axios.post(`${BaseURL}/${url}`,body,config)
    var result=response.data
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

const getDataAxios=async(url:String,config:Object={'content-type':"application/json;charset:utf-8"})=>{
  try {
    var response=await axios.get(`${BaseURL}/${url}`,config)
    var result=response.data
    return result
  } catch (error) {
    console.log(error)
  }
}

const  postDataAndImage=async(url:String,formData:Object,config:Object={headers:{'content-type':'multipart/form-data'}})=>{
  try{
   const response=await axios.post(`${BaseURL}/${url}`,formData,config)
    var result=response.data
    return(result)
  }catch(e)
  {
   return(false)
  }
}

export {BaseURL,postDataAxios,getDataAxios,postDataAndImage}
