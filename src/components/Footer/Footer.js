import { useEffect, useState } from "react";

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
        console.log(data)
        // setCards();
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  let status = "";

  if (error) {
    status = error;
  }

  return (
    <div className={styles.footer}>
      <p className={styles.slogan}>Experience The Cardo</p>
      {isLoading && (
        <div className="spinner-container">
          {/* <img className="spinner" src={loadingSpinner} alt="Loading spinner" /> */}
        </div>
      )}
      {status !== "" && (
        <div className={styles["status-container"]}>
          <div className={styles.message}>
            <h1>{status}</h1>
          </div>
        </div>
      )}
      {!isLoading &&
        cards.length > 0 &&
        cards.map((card) => (
          <div className={styles.grid}>
            <FooterCard />
            <FooterCard />
            <FooterCard />
            <FooterCard />
            <FooterCard />
          </div>
        ))}
    </div>
  );
};

export default Footer;
