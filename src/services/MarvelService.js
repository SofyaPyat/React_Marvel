

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apikey = 'apikey=923456e039a66a4e8fdb6ad7491ee405';
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, request status - ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apikey}`);
    }


    getCharacter = async (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apikey}`);
    }
}

export default MarvelService;