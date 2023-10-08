import '../../style/variables.scss';
import './AppHeader.scss';

function AppHeader () {
    return (
        <header className="header">
            <h1 className="title">
                <a href="#">
                    <span>Marvel </span>information portal
                </a>
            </h1>    
            <nav className='menu'>
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;