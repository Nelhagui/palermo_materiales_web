const ListFilters = ({filters, clearFilter}) => {

    return (
        <>
            {filters?.map((f, index) => {
                return (
                    <div className="col-md-2 filter-container" key={Math.random()} onClick={()=> clearFilter(index)}>
                        {f.titulo}
                    </div>
                )
            })}
        </>
    )
}
export default ListFilters;