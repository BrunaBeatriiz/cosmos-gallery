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

  try {

    const hoje = new Date();
    let ano = String(hoje.getFullYear()).slice(2);
    let mes = String(hoje.getMonth() + 1).padStart(2, '0');
    let dia = String(hoje.getDate()).padStart(2, '0');

    const date = `${ano}${mes}${dia}`;

    const r = await fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}?api_key=${API_KEY}`);




    const data = await r.json();
    data.explanation = data.explanation.replace(/<[I^>]*>/g, '');
    data.credit = data.credit.replace(/<[^>]*>/g, '');
    return data;
  } catch (error) {
    console.log(`Erro na requisição da API: ${error}`)
  }
}

const reqDataEscolhida = async (date) => {
  try {
    const r = await fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}?api_key=${API_KEY}`);

    const data = await r.json();
    data.explanation = data.explanation.replace(/<[^>]*>/g, '');
    data.credit = data.credit.replace(/<[^>]*>/g, '');
    return data;

  } catch (error) {
    console.log(`Erro na requisição da API: ${error}`)
  }
}

const dates2 = [
 // Janeiro
'260101',
'260103',
'260105',
'260108',
'260116',
'260121',
'260124',
'260126',

// Fevereiro
'260201',
'260214',
'260218',
'260220',
'260223',
'260225',

// Março
'260302',
'260308',
'260310',
'260318',
'260323',
'260325',

// Abril
'260401',
'260403',
'260404',
'260408',
'260414',
'260419',
'260421',
'260424',
'260429',

// Maio
'260505',
'260512',
'260515',
'260522',
'260526',

// Junho
'260625',
'260627',
'260629',

// Julho
'260701',
'260702',
'260703',
'260706',
'260707',
'260731',

// Agosto
'260801',
'260802',
'260803',
'260804',
'260805',
'260806',
'260807',
'260808',
'260809',
'260810',
'260811',
'260812',

// Setembro
'260903',
'260902',
'260906',
'260910',
'260911',
'260918',
'260921',
'260923',
'260925',

// Outubro
'261004',
'261007',
];

const reqHighMais = async () => {
  try{
    const requests = dates2.map((date) => 
    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}?api_key=${API_KEY}`).then(res => res.json()));

    const r = await Promise.all(requests);

    return r;

  }catch(error){
    console.log(`Erro na requisição da API: ${error}`)
  }
}


export { reqDia, reqDataEscolhida,reqHighMais };
export default apiReq;