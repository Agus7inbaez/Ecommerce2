import { Link } from "react-router-dom"

const Item = ({ name, category, price, img, id }) =>  {

    const handleClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div  onClick={handleClick}>
            <h4>categoria: {category}</h4>
            <h3>{name}</h3>
            <img src={img} style={{width:300}}/>
            <h4>${price}</h4>
            <Link to= {`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item




