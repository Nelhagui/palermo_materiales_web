import ItemSubCategory from "./ItemSubCategory.js";

const ListSubCategories = ({subcategories, selectSubcategory}) => {

    return (
        subcategories?.map((s) => {
            return <ItemSubCategory s={s}  selectSubcategory={selectSubcategory} key={Math.random()}/>
        })
    )
}
export default ListSubCategories;