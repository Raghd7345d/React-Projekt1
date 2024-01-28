import styles from "./Card.module.css";

export function Card({ title, description1, imageUrl, description2 }) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Card image" className={styles.image} />

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description1}>{description1} </p>
        <p className={styles.description2}>{description2}</p>
      </div>
    </div>
  );
}
export default Card;
