import Image from "next/image";
import ContentsWrap from "../components/contentsWrap";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <ContentsWrap>
      <main>
        <div className={styles.banner} />
        <section className="content-width">
          <div className={styles.me}>
            <div className={styles.meImage}>
              <Image src="/profile_img.jpeg" alt="보미사진" layout="fill" />
            </div>
            <p>UI 개발자</p>
          </div>
          <div className={styles.desc}>
            <p>안녕하세요. UI개발자 김보미입니다.</p>
            <p>UI/UX에 대한 관심이 높고, 최신 기술 트렌드에 관심이 많습니다.</p>
            <ul>
              <li>
                HTML, CSS로 퍼블리싱을 할 수 있습니다.
                <br />웹 표준, 접근성을 고려하여 마크업을 작성합니다.
              </li>
              <li>JavaScript로 동적화면을 구현할 수 있습니다.</li>
              <li>
                또한, api호출하여 데이터 가공 및 CRUD 개발을 할 수 있습니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>김보미의 현 상황</h2>
          <ul>
            <li>
              <p>알아가야 하는 것 들</p>
              <ul>
                <li>웹사이트 성능 최적화</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </ContentsWrap>
  );
};

export default Home;
