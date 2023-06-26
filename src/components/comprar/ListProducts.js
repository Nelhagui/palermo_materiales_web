import ProductSimpleCard from "../ProductSimpleCard.js";

const ListProducts = ({products}) => {
  return (
        <>
            {products?.map((p) => {
              return (
                <ProductSimpleCard
                  key={Math.random()}
                  seccion={"comprar"}
                  producto={p}
                  buttonTitle={"AGREGAR AL CARRITO"}
                  className="col-auto"
                />
              )
            })}
        </>
  )
}

export default ListProducts
