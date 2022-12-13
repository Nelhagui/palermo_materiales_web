import ProductCombinadoCard from "../ProductCombinadoCard.js"
import ItemSubCategory from "./ItemSubCategory.js"
import SubCategoryCardLoading from "./SubCategoryCardLoading.js"

const SubcategoryResults = ({subcategories, selectSubcategory, subcategoriesIsLoading}) => {

    return (
        <>
            {subcategories.length > 0 ?
                subcategories[0].tipo === "categoria" 
                ? 
                    <div className="row cont-text-filters">
                        <div className="col-md-12">
                            <h3>Seleccioná el tipo de construcción</h3>
                        </div>
                    </div> 
                : 
                    <div className="row cont-text-filters">
                        <div className="col-md-12">
                            <p> <strong>{subcategories.length} {subcategories.length > 1 ? "Resultados" : "Resultado"}</strong> </p>
                        </div>
                    </div> 
            : ''}
            <div className="row cont-sucategory-results">
                {
                    subcategoriesIsLoading 
                    ?
                        <>
                            <SubCategoryCardLoading/>
                            <SubCategoryCardLoading/>
                        </>
                    :
                        subcategories?.map((s) => {
                            if (s.tipo === 'categoria') {
                                return <ItemSubCategory s={s} key={Math.random()} selectSubcategory={selectSubcategory}/>
                            } else {
                                return (
                                    <div className="item-product-combinado">
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