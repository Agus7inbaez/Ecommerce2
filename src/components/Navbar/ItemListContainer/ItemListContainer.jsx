import { useState, useEffect} from "react"
import {getDocs, collection, query, where} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../../services/firebase/firebaseConfig"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ()

    const { categoryId } = useParams ()

    useEffect (() => {
        const productsCollection = categoryId ? (
        
        query(collection (db, 'products'),  where ('category', '==', categoryId ) )

    )    :     (
        collection (db, 'products')
    )

    getDocs (productsCollection)
        .then (querySnapshot => {
            const productsAdapted = querySnapshot.docs.map ( doc => {
                const data = doc.data ()
                
                
                
                return { id: doc.id, ...data}
            })
                setProducts (productsAdapted)
        })
        .catch ()

    }, [categoryId])

    return (
        <main>
            <h1> {greeting} </h1>
            <ItemList products={products}/>
        </main>
    )
}
export default ItemListContainer