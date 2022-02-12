import axios, { AxiosRequestConfig } from 'axios';

export const fetchData = () => {
  const wordPromise = fetchWord();
  return {
    word: wrapPromise(wordPromise)
  }
}

export const fetchWord = () =>{
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: { count: '5', wordLength: '5' },
    headers: {
      'x-rapidapi-host': 'random-words5.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY ?? '',
    },
  };

  return axios
  .request(options)
  .then(response => response.data)
  .catch(error => console.error(error));

}

const wrapPromise = (promise: Promise<void>) => {
  let status = 'pending';
  let result: any;
  let suspender = promise.then(
    res => {
      status = 'success';
      result = res
    },
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if(status === 'pending') {
        throw suspender;
      }
      else if (status === 'error') {
        throw result;
      }
      else if(status === 'success') {
        return result;
      }
    }
  }
}