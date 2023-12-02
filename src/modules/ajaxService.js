const ajaxService = (address, city)=>{
    const url = "https://api.postit.lt/v2/?city=";
    const key = "oAIo6osrfmFDJOgStawR";
    
    return fetch(`${url}${city}&address=${address}&key=${key}`)
    .then(Response=>Response.json())
}

export default ajaxService