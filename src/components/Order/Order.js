import * as Styles from "./Styles"

export const Order = () => {
  return (
    <Styles.Order>
      <Styles.Select>
        <option value="" selected>Ordenar por:</option>
        <option value="Recente">Mais Recente</option>
        <option value="Menor preço">Menor preço</option>
        <option value="Maior preço">Maior preço</option>
      </Styles.Select>
    </Styles.Order>
  )
}
