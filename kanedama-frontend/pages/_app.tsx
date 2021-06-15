import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutWithSidebar } from '../src/components';
import Sidebar from '../src/containers/sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWithSidebar
      LayoutContent={<Component {...pageProps} />}
      SidebarContent={<Sidebar />}
    />
  );
}
export default MyApp;
