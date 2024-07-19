
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import Card from './../components/Card';
import { useEffect, useState } from 'react';
import { API } from './../services/index';

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);


    async function buscarProdutos(){
        const request = await API.get('/products')
        setProducts(request.data);
    }

    useEffect(() => {
        buscarProdutos();

},[])

    console.log(products);

    return ( <>
        <section className='jusoverflow-hidden px-5'>
            <h1>Teste de car
            </h1>
            <ul className="flex align-items-center grid list-none p-0">
                {
                    products.map((product) => (
                        // eslint-disable-next-line react/jsx-key
                        <Card  avaliacao={product.rating.rate} image={product.image} nome={product.title} categoria={product.category} preco={product.price} />
                    ))
                }
            
            </ul>
        </section>
    </> 
    );
}
 
export default Home;