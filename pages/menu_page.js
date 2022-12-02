import Navbar from "../components/home page/Navbar";
import Footer from "../components/home page/Footer";
import Content_menu from "../components/menu page/Content_menu";

import { useEffect, useState } from "react";

export default function ANC() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar />
      <Content_menu />
      <Footer />
    </div>
  );
}
