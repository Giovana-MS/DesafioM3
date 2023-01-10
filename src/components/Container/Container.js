import * as Styles from "./Styles";
import { Filters } from "../Filters/Filters";
import { Cards } from "../Cards/Cards";
import { Order } from "../Order/Order";

export const Container = () => {
  return (
    <Styles.Container>
      <Filters/>
      <Cards/>
      <Order/>
    </Styles.Container>
  )
}
