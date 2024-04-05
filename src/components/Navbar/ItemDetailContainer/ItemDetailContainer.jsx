import {useState ,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../../services/firebase/firebaseConfig"
import {getProductById} from "../../../asyncMock"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const { itemId } = useParams ()


    useEffect (() => {
        const productDoc = doc (db, 'products', itemId)


        getDoc (productDoc)
            .then (QueryDocumentSnapshot => {
                const data = QueryDocumentSnapshot.data ()
                const productsAdapted = { id: QueryDocumentSnapshot.id , ...data}
                setProduct(productsAdapted)


            }   )
            .catch ()
            getProductById(itemId)
             .then(response => {
                setProduct(response)
             })

    }, [itemId] )
    
    return (
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}


export default ItemDetailContainer 