const apiReq = async (date) => {
  let res;

  try{
    const busca = await fetch( `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);


    res = await busca.json();
    console.log(res);
    return res;
  }catch(error){
    console.log(`Erro na requisição da api: ${error}`)
  }
}

export default apiReq;
// apiReq();