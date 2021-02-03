import Image from "next/image";
import ContentsWrap from "../components/contentsWrap";
import styles from "./index.module.scss";


const Home = () => {
  return (
    <ContentsWrap>
      <main>
        <section className={styles.banner}>
          <div className={styles.bannerText}>
            <span>안녕하세요.</span>
            <div className={styles.belt}>
              <h1>UI개발자 김보미입니다.</h1>
            </div>
            <div className={styles.desc}>
              <p>
                UI/UX에 대한 관심이 높고, 최신 기술 트렌드에 관심이 많습니다.
              </p>
              <ul>
                <li>
                  HTML, CSS로 퍼블리싱을 할 수 있습니다.
                  <br />웹 표준, 접근성을 고려하여 마크업을 작성합니다.
                </li>
                <li>JavaScript로 동적화면을 구현할 수 있습니다.</li>
                <li>
                  또한, api호출하여 데이터 가공 및 CRUD 화면을 구현 할 수
                  있습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.meImage}>
            <Image src="/profile_img.jpeg" alt="보미사진" layout="fill" />
          </div>
        </section>
        <section className={`${styles.colorSection} ${styles.section}`}>
          <div className="content-width">
            <h2>경력</h2>
          </div>
        </section>
        <div className={styles.colorSection}>
          <section className={`content-width ${styles.section}`}>
            <h3>김보미의 현 상황</h3>
            <ul className={styles.cardList}>
              <li className={styles.card}>
                <div>
                  <p className={`${styles.cardTitle} ${styles.todo}`}>
                    알아가야 하는 것 들
                  </p>
                  <ul>
                    <li>웹사이트 성능 최적화</li>
                  </ul>
                </div>
              </li>
              <li className={styles.card}>
                <div>
                  <p className={`${styles.cardTitle} ${styles.doing}`}>
                    알고있지만 더 배워야 하는 것 들
                  </p>
                  <ul>
                    <li>JavaScript</li>
                    <li>React.js, Next.js</li>
                    <li>Css in JS</li>
                    <li>UI/UX</li>
                  </ul>
                </div>
              </li>
              <li className={styles.card}>
                <div>
                  <p className={`${styles.cardTitle} ${styles.done}`}>
                    알고있는 것 들
                  </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <section className={`content-width ${styles.section}`}>
          <h3>김보미의 앞으로 방향</h3>
          <ol className={styles.olList}>
            <li>
              <p>UI, UX 디자인을 잘아는 UI개발자</p>
              <p>
                디자이너가 전달해주는 그대로 화면을 구현하는 수동적인 사람이
                되고 싶지 않습니다.
                <br />
                UI, UX에 대한 이해가 있어서 디자이너와 같이 의논하며 진행하는
                적극적인 개발자가 될 것 입니다.
              </p>
            </li>
            <li>
              <p>최신기술에 대한 거부감이 없는 UI개발자</p>
              <p>
                매일 똑같은 코드사용, 복붙 코드가 아닌
                <br />
                새로운 기술이 나왔을 때 그것을 응용할 방법을 고민하는 개발자가
                될 것 입니다.
                <br />
                ex.) styled components의 활용, React의 hook, Next.js의
                next/image 등..
              </p>
            </li>
          </ol>
        </section>
        <section className={`content-width ${styles.section}`}>
          <h3>기술외의 능력</h3>
          <ul>
            <li>소통능력</li>
          </ul>
        </section>
      </main>
    </ContentsWrap>
  );
};

export default Home;
