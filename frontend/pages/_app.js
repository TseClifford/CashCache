import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex h-screen bg-gradient-to-r from-indigo-100 to-blue-100">
      <main className="flex flex-row content-center justify-self-center w-full m-10 rounded-3xl bg-zinc-50">
        <Sidebar />
        <Component {...pageProps} />
      </main>
    </main>
  );
}

export default MyApp;
