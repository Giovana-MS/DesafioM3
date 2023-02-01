import * as Styles from "./Styles"
import { Preço } from "../../datas/constants"

export const FilterPrices = ({display}) => {
  return (
    <Styles.Box display={display}>
      {Preço && Preço.map((preço, i) => {
        return(
          <Styles.Preço key={i}>
            <input type={"checkbox"}/>
            <p>{preço}</p>
          </Styles.Preço>
        )
      })}
    </Styles.Box>
  )
}

