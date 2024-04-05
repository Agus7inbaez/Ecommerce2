import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <header style= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Ecommerce</h1>
            <nav>
                <Link to= {'/category/Celular'}   >Celulares</Link>
                <Link to= {'/category/Monitor'}       >Monitores</Link>
                <Link to= {'/category/Auricular'}       >Auriculares</Link>
            </nav>
            <CartWidget />
        </header>
    )
}
export default Navbar