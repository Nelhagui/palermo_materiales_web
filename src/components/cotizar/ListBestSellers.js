import ProductCombinadoCard from "../ProductCombinadoCard.js";
const ListBestSellers = ({products}) => {

    return (
        <>
            <div className="m-3"> 
                <h2>Productos más buscados</h2>
            </div>
            <div className="row cont-items-best">
                {products.map((p) => {
                    return (
                        <ProductCombinadoCard id={p.id} foto={p.foto} title={p.titulo} buttonTitle={'COTIZAR'} key={Math.random()} />
                    )
                })}
            </div>
        </>
    )
}
export default ListBestSellers;