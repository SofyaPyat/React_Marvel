import mjolnir from '../../recources/img/mjolnir.png';

import '../../style/button.scss';
import './RandomChar.scss';

import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error/errorMessage';

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    MService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    getRandomId = () => {
        return Math.floor(Math.random() * (1011400-1011000) + 1011000);
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = this.getRandomId();
        this.MService.getCharacter(id).then(this.onCharLoaded).catch(this.onError);
        //this.MService.getCharacter(1009609).then(this.onCharLoaded);
    }

    componentDidMount = () => {
        this.updateChar();
    }


    render () {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(error || loading) ? <View char={char}/> : null;
        return (
            <div className='randomchar'>
                {errorMessage}
                {spinner}
                {content}
                <div className='randomchar__static'>
                    <h2 className='randomchar__title'>Random character for today!<br/> Do you want to get to know him better?</h2>
                    <h2 className='randomchar__title'>Or choose another one</h2>
                    <button className='button button__main' onClick={this.updateChar}>
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


const View = ({char}) => {
    const {name, description, thumbnail, wiki, homepage, imgNotAvaliable} = char;
    const imgClass = 'randomchar__img' + (imgNotAvaliable ? ' defaultImg' : '');
    return (
        <div className='randomchar__block'>
            <img src={thumbnail} alt="Character" className={imgClass}/>
            <div className='randomchar__info'>
                <h2 className='randomchar__name'>{name}</h2>
                <div className='randomchar__descr'>{description? description.substring(0, 190) + '...': "Нет информации"}</div>
                <div className='randomchar__btns'>
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
    )
}

export default RandomChar;