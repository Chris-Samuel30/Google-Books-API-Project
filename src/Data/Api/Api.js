import axios from 'axios';

let API_URL = "https://www.googleapis.com/books/v1/volumes"

const getBooks = async(search) => {
    const response = await axios.get(`${API_URL}?q=${search}&maxResults=40`);
    console.log("API RESPONSE", response.data.items)
    return response;
}

export const sliceString = (string) => {
    const strStart = string.substring(0,150)
    console.log(strStart);
}



export default getBooks;