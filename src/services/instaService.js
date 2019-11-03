export default  class instaService {
    constructor(){
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        //fetch is API for server request

        if(!res.ok){
            throw new Error(`Could not fetch ${url}; recieved ${res.status}`);
        }

        return await res.json(); // transform json format to object

    }
}