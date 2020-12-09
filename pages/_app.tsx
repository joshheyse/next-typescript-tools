import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

type MyAppProps<T = Record<string, unknown>> = {
  Component: React.ComponentType<T>;
  pageProps: T;
};

function MyApp({Component, pageProps}: MyAppProps): React.ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
