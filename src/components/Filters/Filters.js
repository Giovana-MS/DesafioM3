import * as Styles from "./Styles"
import { FilterColors } from "./FilterColors"
import { FilterSizes } from "./FilterSizes"
import { FilterPrices } from "./FilterPrices"

export const Filters = () => {
  return (
    <Styles.Filter>
      <div>
        <h2>Cores</h2>
        <FilterColors/>

        <h2>Tamanhos</h2>
        <FilterSizes/>
        
        <h2>Faixa de preço</h2>
        <FilterPrices/>
      </div>
    </Styles.Filter>
  )
}
