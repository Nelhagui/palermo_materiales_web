const ListFilters = ({filters, clearFilter}) => {

    return (
        <>
            {filters?.map((f, index) => {
                return (
                    <div className="col-md-2 item-filter" key={Math.random()}>
                        {f.titulo}
                        <span className="close-item-filter" onClick={()=> clearFilter(index)}>X</span>
                    </div>
                )
            })}
        </>
    )
}
export default ListFilters;