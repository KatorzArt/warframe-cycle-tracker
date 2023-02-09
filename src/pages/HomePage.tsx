import { Link } from "react-router-dom"

function HomePage() {
    return <>
        <h1>Warframe Cycle Tracker</h1>
        <Link to="/cetus">Cetus</Link>
        <Link to="/fortuna">Fortuna</Link>
        <Link to="/deimos">Deimos</Link>
    </>
}

export default HomePage