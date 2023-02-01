import * as Styles from "./Styles";
import { Filters } from "../Filters/Filters";
import { Cards } from "../Cards/Cards";
import { Order } from "../Order/Order";
import { useState } from "react";
import { FilterMobile } from "../Filters/FilterMobile";


export const Container = () => {

  const [showFilter, setShowFilter] = useState(false);

  return (
    <Styles.Container>
      <div>
        <Styles.Title>Blusas</Styles.Title>
      </div>
      <FilterMobile showFilter={showFilter} setShowFilter={setShowFilter}/>
      <Styles.ContentMobile display={showFilter.toString()}>
        <Styles.Boxes>
          <div>
            <p onClick={() => setShowFilter(!showFilter)}>Filtrar</p>
          </div>
          <Order/>
        </Styles.Boxes>
        <Cards/>
      </Styles.ContentMobile>
      <Styles.ContentDesktop>
        <Filters/>
        <Cards/>
        <Order/>
      </Styles.ContentDesktop>
    </Styles.Container>
  )
}
