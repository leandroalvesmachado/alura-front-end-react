import styles from "./Populares.module.scss";
import fotosPopulares from "./fotos-populares.json";

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map((fotoPopular) => {
          return (
            <li>
              <img src={fotoPopular.path} alt={fotoPopular.alt} />
            </li>
          )
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}
