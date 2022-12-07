const ListCategories = ({categories, selectCategory}) => {

    return (
        <>
            <div className="col-12"> 
                <h2>Seleccione el tipo de proyecto a realizar</h2>
            </div>
            {categories?.map((c) => {
                return (
                    <div className="col-md-3 cotizar-items button" key={Math.random()} onClick={() => selectCategory(c)}>
                        <img src={c?.foto} alt="foto" />
                        <p>{c?.titulo}</p>
                    </div>
                )
            })}
        </>
    )
}
export default ListCategories;