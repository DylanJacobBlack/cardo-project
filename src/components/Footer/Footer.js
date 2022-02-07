import { useEffect, useState } from "react";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

import FooterCard from "./FooterCard";

import styles from "./Footer.module.css";

const Footer = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          "https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf"
        );

        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        const data = await response.json();
        setCards(data.slice(0, 6));
      } catch (error) {
        setError(error.message);
        console.log(error)
      }
      setIsLoading(false);
    })();
  }, []);

  let status = "";

  if (error) {
    status = "Our apologies, but we are unable to retrieve data at this time.";
  }

  return (
    <div className={styles.footer}>
      <p className={styles.slogan}>Experience The Cardo</p>
      {isLoading && (
        <div class={styles["lds-dual-ring"]}></div>
      )}
      {status !== "" && (
        <div className={styles["status-container"]}>
          <div className={styles.message}>{status}</div>
        </div>
      )}
      <GridRow wrap="wrap" align="center" justify="center">
        {!isLoading &&
          cards.length > 0 &&
          cards.map((card) => (
            <GridColumn width={[12, 10, 5, 3.5]} m="m">
              <FooterCard title={card.title} description={card.description} button={card.button} />
            </GridColumn>
          ))}
      </GridRow>
    </div>
  );
};

export default Footer;
