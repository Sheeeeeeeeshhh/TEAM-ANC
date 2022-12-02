import styles from "./Content_menu.module.css";
import Search from "./Search.jsx";
import Card from "./Card.jsx";

import { useEffect, useState } from "react";

export default function Content_menu() {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>
      <Search query={query} setQuery={setQuery} />
      <Card query={query} />
    </div>
  );
}
