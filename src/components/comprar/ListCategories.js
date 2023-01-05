
const ListCategories = ({categories, subcategories, setCatId}) => {

  return (
    <>
        {
            categories.length == 0
            ?
            <>
                <div className="btn-category loading"></div>
                <div className="btn-category loading"></div>
                <div className="btn-category loading"></div>
                <div className="btn-category loading"></div>
            </>
            :
            categories?.map((c, idx) => {
                return (
                <div key={Math.random()}>
                    <div  className="d-flex align-items-center my-2 gap-2 side-categories">
                    <img
                        src={c.icon}
                        alt="icon"
                        className="my-auto"
                        style={{ width: '1.5em' }}
                    />
                    <p className="my-auto side-text">
                        {c.titulo}
                    </p>
                    </div>
                    {[subcategories]?.map((s) => {
                    return (
                        <div key={Math.random()}>
                            <p style={{ marginLeft: '2em' }}>{s.titulo}</p>
                        </div>
                    )
                    })}
                </div>
                )
            })
        }
    </>
  )
}

export default ListCategories
