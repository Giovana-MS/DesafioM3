import * as Styles from "./Styles"
import { Cores } from "../../datas/constants"

export const FilterColors = ({display}) => {
  return (
    <Styles.Box display={display}>
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
  )
}
