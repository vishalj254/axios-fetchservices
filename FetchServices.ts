import axios from 'axios';
const BaseURL='http://localhost:3000'

const postData=async(url: String,body: Object)=>{
  try {
    console.log("call")
    const response=await fetch(`${BaseURL}/${url}`,{
      method:'post',
      mode:'cors',
      body:JSON.stringify(body),
      headers:{'content-type':"application/json;charset=utf-8"}
    })
    var result=await response.json()
    return result
  } catch (error) {
    console.log(error);
  }
}

const postDataAxios=async(url:String,body:Object,config:Object={'content-type':"application/json;charset=utf-8"})=>{
  try {
    console.log(config)
    var response=await axios.post(`${BaseURL}/${url}`,body,config)
    console.log(response)
    var result=response.data
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const getDataAxios=async(url:String,config:Object={'content-type':"application/json;charset:utf-8"})=>{
  try {
    var response=await axios.get(`${BaseURL}/${url}`,config)
    var result=response.data
    console.log(result)
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

export {BaseURL,postData,postDataAxios,getDataAxios,postDataAndImage}
