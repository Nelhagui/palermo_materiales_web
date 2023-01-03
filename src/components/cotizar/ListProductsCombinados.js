import ProductCombinadoCard from "../ProductCombinadoCard.js";

const ListProductsCombinados = ({subcategories}) => {
    return (
        subcategories?.map((s) => {
            return <div className="item-product-combinado" key={Math.random()}>
                        <ProductCombinadoCard
                          producto={s}
                          id={s?.id}
                          title={s?.titulo}
                          foto={s?.foto}
                          className="col-auto"
                          buttonTitle={"COTIZAR"}
                          categoria_id={s.categoria_id}
                        />
                    </div>
        })
    )
}
export default ListProductsCombinados;