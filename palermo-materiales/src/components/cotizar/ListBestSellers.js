import ProductCombinadoCard from "../ProductCombinadoCard.js";
const ListBestSellers = ({products}) => {

    return (
        <>
            <div className="col-12"> 
                <h2>Productos más buscados</h2>
            </div>
            {products.map((p) => {
                return (
                    <ProductCombinadoCard id={p.id} foto={p.foto} title={p.titulo} buttonTitle={'COTIZAR'} key={Math.random()} />
                )
            })}
        </>
    )
}
export default ListBestSellers;