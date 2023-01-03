import ItemCategory from "./ItemCategory.js";
import CategoryCardLoading from "./CategoryCardLoading.js";
const ListCategories = ({categories, selectCategory, idCategorySelected}) => {

    return (
        <>
            {   
                categories.length == 0 
                ? 
                    <>
                        <CategoryCardLoading/>
                        <CategoryCardLoading/>
                        <CategoryCardLoading/>
                        <CategoryCardLoading/>
                    </>
                :
                categories?.map((c) => {
                    return <ItemCategory c={c} key={Math.random()} selectCategory={selectCategory} idCategorySelected={idCategorySelected}/>
                })
            }
        </>
    )
}
export default ListCategories;