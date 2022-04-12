import BalanceBox from "../components/WindowElements/BalanceBox";
import SearchBar from "../components/WindowElements/SearchBar";

export default function Summary() {
  return (
    <div className="flex flex-row w-full">
      <main className="flex flex-col w-2/3 text-center px-5 py-10 space-y-10">
        <section className="flex flex-row justify-between items-center">
          <div className="text-left">
            <p className="text-2xl">
              <b>CashCache</b> Summary
            </p>
            <p className="text-slate-400 text-lg">
              Good Evening, Clifford Tse!
            </p>
          </div>
          <SearchBar placeholder={"Search activity or another..."} />
        </section>
        <section className="flex flex-row justify-between">
          <BalanceBox />
          <div>Send Money</div>
        </section>
        <div>Payment Chart/Graph</div>
        <div>Invoice History</div>
      </main>
      <div className="flex w-1/3 justify-center text-center px-5 py-10 bg-red-100">
        Profile Summary
      </div>
    </div>
  );
}
