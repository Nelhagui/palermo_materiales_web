
const SubCategoryCardLoading = () => {
    const styleContent = {
        maxWidth: '255px',
        minWidth: '255px',
        with: '68vw',
        justifyContent: 'flex-start',
        height: '4.5em',
        alignItems: 'center',
        display: 'flex',
        overflow: 'hidden',
        marginLeft: '1rem',
        marginRight: '0.8rem'
      };
     const styleCircle = {
        backgroundColor: '#cecece'
     }
    return (
        <div className="col-md-3 loading" style={styleContent}>
            <div className="circle-subcategorias" style={styleCircle}>
            </div>
        </div>
    )
}

export default SubCategoryCardLoading
