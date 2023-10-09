import thor from '../../recources/img/thor.jpeg';
import mjolnir from '../../recources/img/mjolnir.png';
import '../../style/button.scss';
import './RandomChar.scss';

function RandomChar() {
    return (
        <div className='randomchar'>
            <div className='randomchar__block'>
                <img src={thor} alt="Character" className='randomchar__img'/>
                <div className='randomchar__info'>
                    <h2 className='randomchar__name'>Thor</h2>
                    <div className='randomchar__descr'>description</div>
                    <div className='btns'>
                        <a href = "#" className='button button__main'>
                            <div className='inner'>
                                Homepage
                            </div>
                        </a>
                        <a href = "#" className='button button__secondary'>
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

export default RandomChar;