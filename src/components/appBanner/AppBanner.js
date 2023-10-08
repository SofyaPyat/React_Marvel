import './AppBanner.scss';
import avengers from '../../recources/img/avengers.png';
import avengersLogo from '../../recources/img/logo_avengers.png';
function AppBanner() {
    return (
        <div className="banner">
            <img src={avengers} alt="Avengers"/>
            <h2 className="banner-text">New comics every week!<br/>
            Stay tuned!</h2>
            <img src={avengersLogo} alt="Averages Logo"/>
        </div>
    )
}

export default AppBanner;