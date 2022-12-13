import ProductCombinadoCard from "../ProductCombinadoCard.js"

const SubcategoryResults = ({subcategories, selectSubcategory}) => {

    return (
        <>
            {subcategories.length > 0 ? 
                <div className="row cont-text-filters">
                    <div className="col-md-12">
                        <h3>Seleccioná el tipo de construcción</h3>
                    </div>
                </div> 
            : ''}
            <div className="row cont-sucategory-results">
                {
                    subcategories?.map((s) => {
                        if (s.tipo === 'categoria') {
                            return (
                                <div className="col-md-3 cotizar-subitems"  onClick={() => selectSubcategory(s)} key={Math.random()}>
                                    <div className="circle-subcategorias">
                                        <img src={s.icon} alt="icon" />
                                    </div>
                                    <div className="title-subcategorias">
                                        <p className="h6">{s.titulo}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="col-md-3 item-product-combinado">
                                    <ProductCombinadoCard
                                      key={Math.random()}
                                      producto={s}
                                      id={s?.id}
                                      title={s?.titulo}
                                      foto={s?.foto}
                                      className="col-auto"
                                      buttonTitle={"COTIZAR"}
                                      categoria_id={s.categoria_id}
                                    />
                                </div>
                              )
                        }
                    })
                }
            </div>
        </>
    )
}
export default SubcategoryResults;