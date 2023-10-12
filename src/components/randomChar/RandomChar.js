import mjolnir from '../../recources/img/mjolnir.png';
import '../../style/button.scss';
import './RandomChar.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }
    state = {
        char: {}
    }

    MService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char})
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400-1011000) + 1011000);
        this.MService.getCharacter(id).then(this.onCharLoaded);
        //this.MService.getCharacter(1009609).then(this.onCharLoaded);
    }
    render () {
        const {char: {name, description, thumbnail, wiki, homepage}} = this.state;
        return (
            <div className='randomchar'>
                <div className='randomchar__block'>
                    <img src={thumbnail} alt="Character" className='randomchar__img'/>
                    <div className='randomchar__info'>
                        <h2 className='randomchar__name'>{name}</h2>
                        <div className='randomchar__descr'>{description? description.substring(0, 190) + '...': "Нет информации"}</div>
                        <div className='btns'>
                            <a href = {homepage} className='button button__main'>
                                <div className='inner'>
                                    Homepage
                                </div>
                            </a>
                            <a href = {wiki} className='button button__secondary'>
                                <div className='inner'>
                                    WIKI
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='randomchar__static'>
                    <h2 className='randomchar__title'>Random character for today!<br/> Do you want to get to know him better?</h2>
                    <h2 className='randomchar__title'>Or choose another one</h2>
                    <button className='button button__main'>
                        <div className='inner'>
                            TRY IT
                        </div>
                    </button>
                    <img src={mjolnir} alt="Mjolnir" className='randomchar__dec'/>
                </div>
            </div>
        )
    }   
}

export default RandomChar;