import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex flex-row w-full h-screen py-5">
      <Sidebar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
