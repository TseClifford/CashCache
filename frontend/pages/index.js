import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-screen py-5">
      <Sidebar />

      <div className="flex flex-row w-full">
        <div className="flex w-1/2 justify-center text-center">Page Info</div>
        <div className="flex w-1/2 justify-center text-center">Profile Summary</div>
      </div>
    </main>
  );
}
