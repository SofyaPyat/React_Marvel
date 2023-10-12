

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
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apikey}`);
        return res.data.results.map(this._transrofmCharacter)
;    }


    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apikey}`);
        return this._transrofmCharacter(res.data.results[0]);
    }


    _transrofmCharacter = (res) => {
        return {
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url
        }
    }
}

export default MarvelService;