import * as Styles from "./Styles"
import productsdb from "../../datas/productsdb.json"
import {Image} from "../../datas/constants"

export const Cards = () => {
  return (
    <Styles.Container>
      <Styles.ContainerCard>
        {
          productsdb && productsdb.map((product) => {
            return (
              <Styles.Card key={product.id}>
                <img src={Image[product.id]} alt={`Foto da roupa ${product.name}`}/>
                <h1>{product.name}</h1>
                <p>R$ {(product.value).toFixed(2).replace(".", ",")}</p>
                <span>{`até 3x de R$ ${(product.value / 3).toFixed(2).replace(".", ",")}`}</span>
                <button>Comprar</button>
              </Styles.Card>
            )
          })
        }
      </Styles.ContainerCard>
      <Styles.Button>Carregar mais</Styles.Button>
    </Styles.Container>
  )
}
