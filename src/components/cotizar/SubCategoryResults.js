import SubCategoryCardLoading from "./SubCategoryCardLoading.js"
import ListSubCategories from "./ListSubCategories.js"
import ListProductsCombinados from "./ListProductsCombinados.js"

const SubCategoryResults = ({subcategories, selectSubcategory, subcategoriesIsLoading}) => {

    if(subcategoriesIsLoading && subcategories.length == 0)
    {
        return (
            <>
                <div className="row cont-text-filters">
                    <div className="col-md-12">
                         <h3 className="cot-title">Seleccioná el tipo de construcción</h3>
                    </div>
                </div> 
                <div className="row cont-sucategory-results">
                    <>
                        <SubCategoryCardLoading/>
                        <SubCategoryCardLoading/>
                     </>
                </div>
            </>
        )
    }
    else if(subcategoriesIsLoading === false && subcategories.length > 0)
    {
        if(subcategories[0].tipo === "categoria")
        {
            return (
                <>
                    <div className="row cont-text-filters">
                        <div className="col-md-12 cont-best-sellers">
                            <h3 className="cot-title sub-tit">Seleccioná el tipo de construcción</h3>
                        </div>
                    </div> 
                    <div className="row cont-sucategory-results cont-best-sellers">
                        <>
                            <ListSubCategories subcategories={subcategories} selectSubcategory={selectSubcategory}/>
                         </>
                    </div>
                </>
            )
        }
        else
        {
            return (
                <>
                    <div className="row cont-text-filters">
                        <div className="col-md-12">
                            <p> <strong>{subcategories.length} {subcategories.length > 1 ? "Resultados" : "Resultado"}</strong> </p>
                        </div>
                    </div> 
                    <div className="row cont-sucategory-results">
                        <>
                            <ListProductsCombinados subcategories={subcategories}/>
                         </>
                    </div>
                </>
            )
        }
    }
}
export default SubCategoryResults;