import thor from '../../recources/img/thor.jpeg';
import mjolnir from '../../recources/img/mjolnir.png';
import '../../style/button.scss';
function RandomChar() {
    return (
        <div>
            <div>
                <img src={thor} alt="Character"/>
                <div>
                    <h2>Thor</h2>
                    <div>description</div>
                    <div>
                        <button className='button button__main'>Homepage</button>
                        <button className='button button__secondary'>WIKI</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Random character for today!<br/> Do you want to get to know him better?</h2>
                <h2>Or choose another one</h2>
                <button>TRY IT</button>
                <img src={mjolnir} alt="Mjolnir"/>
            </div>
        </div>
    )
}

export default RandomChar;