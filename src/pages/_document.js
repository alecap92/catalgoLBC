import { Html, Head, Main, NextScript } from "next/document";
import { FaGlobe, FaWhatsapp } from "react-icons/fa";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      <body>
        <Main />
        <NextScript />
        <a href="https://api.whatsapp.com/send?phone=971502019016" class="float" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <section style={{ position: "absolute ", top: "10px", right: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FaGlobe size={20} />
          <a
            style={{ marginLeft: "10px", color: "#BC9B48", fontWeight: "500", letterSpacing: "1px", fontSize: "1.2em" }}
            href="https://labc.ae/buyers"
          >
            www.labc.ae
          </a>
        </section>
      </body>
    </Html>
  );
}
