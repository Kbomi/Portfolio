import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="point">Bomi</h1>
      <nav id="gnbMenuWrap">
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
