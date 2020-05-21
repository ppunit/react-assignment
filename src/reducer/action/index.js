import config from '../../config'

const searchSucess=(data)=>(
    {
        type:"LIST",
        target:data
    }
)
const searchComments=(data)=>(
    {
        type:"COMMENTS",
        target:data
    }
)

export const getList=()=>{
    return dispatch=>{
        
        let url=config.baseUrl
      
        fetch(url,{
            method:"get",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{return res.json()}
        )
        .then((response,error)=>{
          
            dispatch(searchSucess(response))
            
        })
        .catch((error)=>console.log(error))
       
      
    }
}


export const getComments=(id)=>{
    return dispatch=>{
        
        let url=config.commentsurl+`${id}/comments`
      
        fetch(url,{
            method:"get",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{return res.json()}
        )
        .then((response,error)=>{
          
            dispatch(searchComments(response))
            
        })
        .catch((error)=>console.log(error))
       
      
    }
}