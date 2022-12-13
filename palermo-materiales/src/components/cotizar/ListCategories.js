import ItemCategory from "./ItemCategory.js";
const ListCategories = ({categories, selectCategory, idCategorySelected}) => {

    return (
        <>
            {categories?.map((c) => {
                return <ItemCategory c={c} key={Math.random()} selectCategory={selectCategory} idCategorySelected={idCategorySelected}/>
            })}
        </>
    )
}
export default ListCategories;