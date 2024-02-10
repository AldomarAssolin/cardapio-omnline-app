
import { menu } from './cardapio'
import CardLanche from './Card';
//import Navegacao from './Navegacao';

// eslint-disable-next-line react/prop-types
function ContainerCards({ pagAtual }) {


    return (
        <section className="container__cards align-items-center d-md-flex justify-content-md-around flex-wrap">
            <div>
                {
                    menu[pagAtual].map((item) => {
                        return (
                            <CardLanche
                                key={item.id}
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