import axios from "axios";

const { REACT_APP_API_YELP_KEY } = process.env;

const Yelp = async(term, location, sortBy) => {
    const corsFix = 'https://cors-anywhere.herokuapp.com/';
    const url = `${corsFix}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    try{
        const response = await axios.get(url, {
            headers: {  
                Authorization: `Bearer ${REACT_APP_API_YELP_KEY}`
            }
        });
        if(response) {
            console.log(response)
            return response;
        } else {
            return [];
        }
    }
    catch (e){
        console.log(e);
        console.error(e);
        return;
    }
}

export default Yelp;