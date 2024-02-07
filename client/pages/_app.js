// next가 서버사이드 렌더링을 하기위해 필요한 컴포넌트
// 기본적으로 공식이 정해져 있음
import "./index.scss";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// ctx -> context
App.getInitialProps = async ({ ctx, Component }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
