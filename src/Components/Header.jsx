import "../App.css"
import parrot from '../assets/parrot.png';
export default function Header() {
    return (
        <header>
            <div>
                <img className="parrotImg" src={parrot} alt="parrotimg" />
            </div>
            <div className="heading">
                <h1>PolyGlot</h1>
                <p>Perfect Translation every time</p>
            </div>
        </header>
    )
}