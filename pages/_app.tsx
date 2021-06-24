import "../styles/common.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <title>UI개발자 김보미</title>
        <meta property="og:title" content="UI Developer Bomi" />
        <meta
          property="og:description"
          content="UI 개발자 김보미의 포트폴리오"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="" /> */}
        {/* <meta
          property="og:image"
          content=""
        /> */}
        <meta property="og:site_name" content="UI Developer Bomi" />
        <meta name="description" content="UI 개발자 김보미의 포트폴리오" />
        <meta name="keywords" content="품고, UI 개발자 김보미의 포트폴리오" />
        <meta name="twitter:card" content="summary" />
        {/* <meta property="twitter:url" content="" /> */}
        <meta name="twitter:title" content="UI Developer Bomi" />
        {/* <meta
          name="twitter:image"
          content=""
        /> */}
        <meta
          name="twitter:description"
          content="UI 개발자 김보미의 포트폴리오"
        />
        <meta name="robots" content="index,follow" />
        {/* <link rel="shortcut icon" sizes="256x256" href="" />
        <link rel="shortcut icon" sizes="196x196" href="" />
        <link rel="shortcut icon" sizes="128x128" href="" />
        <link rel="shortcut icon" sizes="48x48" href="" />
        <link rel="shortcut icon" sizes="32x32" href="" />
        <link rel="shortcut icon" href="" />
        <link rel="icon" sizes="128x128" href="" type="image/png" />
        <link rel="icon" sizes="64x64" href="" type="image/png" />
        <link rel="icon" sizes="32x32" href="" type="image/png" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="180x180" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="167x167" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="152x152" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="144x144" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="120x120" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="114x114" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="76x76" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="72x72" href="" />
        <link rel="apple-touch-icon-precomposed apple-touch-icon" sizes="60x60" href="" />
        <link rel="apple-touch-icon-precomposed" href="" /> */}
        {/* <meta name="msapplication-TileImage" content="" />
        <meta name="msapplication-TileColor" content="#" /> */}
        {/* <link rel="canonical" href="" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <div className="skip-nav-wrap offscreen">
        <a href="#gnbMenuWrap">메뉴 바로가기</a>
        <a href="#contentsWrap">본문 바로가기</a>
      </div>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
