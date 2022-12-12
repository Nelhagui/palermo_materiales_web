import ItemCategory from "./ItemCategory.js";
const ListCategories = ({categories, selectCategory}) => {

    return (
        <>
            {categories?.map((c) => {
                return <ItemCategory c={c} key={Math.random()} selectCategory={selectCategory}/>
            })}
        </>
    )
}
export default ListCategories;