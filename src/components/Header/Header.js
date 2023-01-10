import logo from "../../assets/logo-m3.png"
import cart from "../../assets/cart.svg"
import * as Styles from "./Styles"

export const Header = () => {
  return (
    <Styles.Header>
      <Styles.Logo src={logo} alt="Logotipo da marca M3"/>
      <Styles.Cart src={cart} alt="icone para acessar o carrinho"/>
    </Styles.Header>
  )
}
