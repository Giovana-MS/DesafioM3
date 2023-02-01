import * as Styles from "./Styles"
import { Tamanhos } from "../../datas/constants"
import { useState } from "react";

export const FilterSizes = ({display}) => {

  const [indexSize, setIndexSize] = useState(undefined);
  const sizeSelected = (i) => {
    setIndexSize(i+1)
  }

  return (
    <Styles.Box display={display}>
      <Styles.Square>
        {Tamanhos && Tamanhos.map((tamanho, i) => {
          return(
            <Styles.Tamanhos
              key={i}
              onClick={() => sizeSelected(i)}
              index={indexSize}
            >{tamanho}</Styles.Tamanhos>
          )
        })}
      </Styles.Square>
    </Styles.Box>
  )
}

