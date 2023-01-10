import * as Styles from "./Styles"
import { Cores, Preço, Tamanhos } from "../../datas/constants"

export const Filters = () => {
  return (
    <Styles.Filter>
      <div>
        <h1>Blusas</h1>
        <Styles.Box>
          <h2>Cores</h2>
          {Cores && Cores.map((cor, i) => {
            return (
              <Styles.Cores key={i}>
                <input type={"checkbox"}/>
                <p>{cor}</p>
              </Styles.Cores>
            )
          })}
          <span>Ver todas as cores</span>
        </Styles.Box>
        <Styles.Box>
          <h2>Tamanhos</h2>
          <Styles.Square>
            {Tamanhos && Tamanhos.map((tamanho, i) => {
              return(
                <Styles.Tamanhos key={i}>{tamanho}</Styles.Tamanhos>
              )
            })}
          </Styles.Square>
        </Styles.Box>
        <Styles.Box>
          <h2>Faixa de preço</h2>
          {Preço && Preço.map((preço, i) => {
            return(
              <Styles.Preço key={i}>
                <input type={"checkbox"}/>
                <p>{preço}</p>
              </Styles.Preço>
            )
          })}
        </Styles.Box>
      </div>
    </Styles.Filter>
  )
}
