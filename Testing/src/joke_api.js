import axios from 'axios';

const fetchJoke = async url => {
    try{
        const res = await axios.get(url);
        console.log(res.data);
        return res.data;
    }catch(err){
        console.log(err);
    }    
}

export { fetchJoke }

fetchJoke('https://api.chucknorris.io/jokes/random')