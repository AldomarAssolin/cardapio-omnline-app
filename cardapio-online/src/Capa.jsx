import Image from 'react-bootstrap/Image';

import imgCapa from './assets/capa/capa1.jpeg'

function Capa() {
    return (
        <section className="capa">
            <Image src={imgCapa} className='mb-2' alt='Imagem de uma lanceria com a faixada e algumas mesas e cadeiras do lado de fora, a noite.' fluid />;
        </section>
    )
  }
  
  export default Capa;