/* eslint-disable react/prop-types */
const Card = (props) => {
    return ( 
        <>
            
             <li className="col-12 md:col-3">
                    
                    <div className='shadow-4 p-3 border-round-md'>
                        <div className='relative'>
                        <img className="w-full" style={{height:"300px", objectFit:"contain"}}
                        // eslint-disable-next-line react/prop-types
                        src={props.image}
                         alt={props.nome} />
                         <h6 className='absolute top-0 right-0 bg-primary py-0 px-3'>{props.avaliacao}</h6>
                        </div>
                        
                        <h3 className='mb-0 text-overflow-ellipsis white-space-nowrap overflow-hidden'>{props.nome}</h3>
                        <h6 className='mt-0 text-primary uppercase'>{props.categoria}</h6>
                        <h2 className='mb-0'>R${props.preco}</h2>
                    </div>
    
                    </li>
        </>
     );
}
 
export default Card;