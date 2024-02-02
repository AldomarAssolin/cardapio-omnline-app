
import { xis } from './cardapio'
import CardLanche from './Card';

function ContainerCards(){
    return(
        <section className="container__cards align-items-center d-md-flex justify-content-md-around flex-wrap">
            <div className=''>
                {
                xis.map(function (item ){
                    return (
                    <CardLanche
                        key=''
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        image={item.imagem}
                        />
                    )
                })
                }
            </div>
        </section>
    )
}

export default ContainerCards