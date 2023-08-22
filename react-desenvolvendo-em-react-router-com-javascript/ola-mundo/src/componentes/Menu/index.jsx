import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobremim">Sobre Mim</MenuLink>
      </nav>
    </header>
  )
}
