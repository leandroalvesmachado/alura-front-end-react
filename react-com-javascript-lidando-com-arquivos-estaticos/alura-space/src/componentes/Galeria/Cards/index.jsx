import Card from "./Card";

export default function Cards({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <Card item={item} style={styles} />
        )
      })}
    </ul>
  )
}
