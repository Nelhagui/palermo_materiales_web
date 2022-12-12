const ListCategories = ({categories, selectCategory}) => {

    return (
        <>
            {categories?.map((c) => {
                return (
                    <div className="cotizar-items" key={Math.random()} onClick={() => selectCategory(c)}>
                        <img src={c?.foto} alt="foto" />
                        <p>{c?.titulo}</p>
                    </div>
                )
            })}
        </>
    )
}
export default ListCategories;