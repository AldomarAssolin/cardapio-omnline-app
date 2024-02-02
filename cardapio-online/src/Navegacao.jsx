

function Navegacao(){
    return(
        <section className="navegacao p-0">
            <input type="radio" name="pag-0" id="xis" checked/>
            <label htmlFor="xis">Xis</label>
            <input type="radio" name="pag-1" id="dog" />
            <label htmlFor="dog">Dog</label>
            <input type="radio" name="pag-2" id="bebidas" />
            <label htmlFor="bebidas">Bebidas</label>
        </section>
    )
}

export default Navegacao