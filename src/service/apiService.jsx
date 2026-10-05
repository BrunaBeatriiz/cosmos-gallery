const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const dates = [
  '250817',
  '250818',
  '250819',
  '250820',
  '250821',
  '250822',
];

const apiReq = async () => {
  try {
    const requests = dates.map((date) =>
      fetch(
        `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}?api_key=${API_KEY}`
      ).then((res) => res.json())
    );

    const res = await Promise.all(requests);

    return res;
  } catch (error) {
    console.log(`Erro na requisição da API: ${error}`);
  }
};



const reqDia = async () => {

  try{

    const hoje = new Date();
    let ano = String(hoje.getFullYear()).slice(2);
    let mes = String(hoje.getMonth()+ 1).padStart(2,'0');
    let dia = String(hoje.getDate()).padStart(2,'0');

    const date = `${ano}${mes}${dia}`;

    const r = await fetch( `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}?api_key=${API_KEY}`);
    



    const data = await r.json();
    data.explanation = data.explanation.replace(/<[^>]*>/g, '');
    data.credit = data.credit.replace(/<[^>]*>/g, '');
    return data;
  }catch(error){
    console.log(`Erro na requisição da API: ${error}`)
  }
}


export {reqDia};
export default apiReq;