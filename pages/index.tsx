import Image from "next/image";
import ContentsWrap from "../components/contentsWrap";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <ContentsWrap>
      <>
        <div className={styles.banner} />
        <div className="content-width">
          <div className={styles.me}>
            <div className={styles.meImage}>
              <Image src="/profile_img.jpeg" alt="보미사진" layout="fill" />
            </div>
            <p>UI 개발자</p>
          </div>
        </div>
      </>
    </ContentsWrap>
  );
};

export default Home;
