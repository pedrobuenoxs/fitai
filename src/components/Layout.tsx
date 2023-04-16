import React from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer>
        <h1>Footer</h1>
        <p>
          Aqui sera construido o footer do site com as informacoes da empresa e
          etc. Tera links para as paginas de politica de privacidade, termos de
          uso, etc. Tambem tera links para as redes sociais da empresa. Tera um
          botao para o usuario entrar em contato com a empresa.
        </p>
        <p>
          Aqui sera construido o footer do site com as informacoes da empresa e
        </p>
      </footer>
    </>
  );
};

export default Layout;
