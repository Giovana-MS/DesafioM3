import * as Styles from "./Styles"
import { useState } from "react";
import { FilterColors } from "../Filters/FilterColors";
import { FilterPrices } from "../Filters/FilterPrices";
import { FilterSizes } from "../Filters/FilterSizes";

export const FilterMobile = ({showFilter, setShowFilter}) => {

  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  return (
    <Styles.MobileFilter display={showFilter.toString()}>
      <Styles.SectionOne>
        <p>Filtrar</p>
        <p onClick={() => setShowFilter(!showFilter)}>X</p>
      </Styles.SectionOne>
      <Styles.SectionTwo>
        <div>
          <Styles.ColorSection onClick={() => setShowColors(!showColors)}>
            <p>Cores</p>
            <span>V</span>
          </Styles.ColorSection>
          <FilterColors display={showColors.toString()}/>
        </div>
        <div>
          <Styles.SizeSection onClick={() => setShowSizes(!showSizes)}>
            <p>Tamanhos</p>
            <span>V</span>
          </Styles.SizeSection>
          <FilterSizes display={showSizes.toString()}/>
        </div>
        <div>
          <Styles.PriceSection onClick={() => setShowPrices(!showPrices)}>
            <p>Faixas de Preços</p>
            <span>V</span>
          </Styles.PriceSection>
          <FilterPrices display={showPrices.toString()}/>
        </div>
      </Styles.SectionTwo>
    </Styles.MobileFilter>
  )
}
