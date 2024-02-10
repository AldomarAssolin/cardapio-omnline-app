

// eslint-disable-next-line react/prop-types
function Navegacao({ onChange }) {

    return (
        <section className="navegacao p-0">
            <input type="radio" name="menu" id="xis" value='xis' onChange={onChange} />
            <label htmlFor="xis">Xis</label>
            <input type="radio" name="menu" id="dog" value='dog'  onChange={onChange}  />
            <label htmlFor="dog">Dog</label>
            <input type="radio" name="menu" id="bebidas" value='bebidas' onChange={onChange}  />
            <label htmlFor="bebidas">Bebidas</label>
        </section>
    )
}

export default Navegacao