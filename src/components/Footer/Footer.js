import { useEffect, useState } from "react";
import { GridRow, GridColumn } from "emotion-flex-grid";

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
      
      // Cleanup function to prevent memory leak
      return () => {
        setCards({}); 
        setError({});
        setIsLoading({})
      };
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
        <div className={styles["lds-dual-ring"]}></div>
      )}
      {status !== "" && (
        <div className={styles["status-container"]} alt="spinner">
          <div className={styles.message}>{status}</div>
        </div>
      )}
      <GridRow wrap="wrap" align="center" justify="between">
        {!isLoading &&
          cards.length > 0 &&
          cards.map((card) => (
            <GridColumn width={[12, 12, 5, 5, 3.65]} m="m" key={card.title}>
              <FooterCard title={card.title} description={card.description} button={card.button} />
            </GridColumn>
          ))}
      </GridRow>
    </div>
  );
};

export default Footer;
