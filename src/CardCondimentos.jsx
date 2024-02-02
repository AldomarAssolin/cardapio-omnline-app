import { condimentos } from './cardapio'

function CardCondimentos(){
    return(
        <div className="notice rounded p-0 text-center">
            <h3 className='m-0 pt-2 text-danger'>Atenção!</h3>
            <p className='text-warning pb-3'>{condimentos}</p>
        </div>
    )
}

export default CardCondimentos