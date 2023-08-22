import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MenuLink({ children, to }) {
  // hook do react
  const localizacao = useLocation();

  // {
  //   "pathname": "/",
  //   "search": "",
  //   "hash": "",
  //   "state": null,
  //   "key": "default"
  // }
  // console.log(localizacao);
  
  return (
    <Link 
      className={`
        ${styles.link}
        ${localizacao.pathname === to ? styles.linkDestacado : ''}
      `} 
      to={to}
    >
      {children}
    </Link>
  )
}
