import ProductSimpleCard from "../ProductSimpleCard.js";

const ListProducts = ({products}) => {
    console.log(products);
  return (
        <>
            {products?.map((p) => {
              return (
                <ProductSimpleCard
                  key={p.id}
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
