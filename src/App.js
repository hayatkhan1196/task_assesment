import React from "react";
import styles from "./App.module.scss";
import KorukidsHealthcare from "./Components/koruKidsHealthcare/koruKidsHealthcare";
import KorukidsOverview from "./Components/koruKidsOverview/koruKidsOverview";
import KoruKidsCard from "./Components/koruKidsOverview/koruKidsOverview";

function App() {
  return (
    <div className={styles.app}>
      <KoruKidsCard />
      <KorukidsHealthcare />
    </div>
  );
}

export default App;
