import BalanceBox from "../components/WindowElements/BalanceBox";
import MoneyTransfer from "../components/WindowElements/MoneyTransfer";
import SpendingGraph from "../components/WindowElements/SpendingGraph";
import SearchBar from "../components/WindowElements/SearchBar";

export default function Summary() {
  return (
    <div className="flex flex-row w-full">
      <main className="flex flex-col w-2/3 text-center p-10 space-y-10 border-r-2 border-slate-100">
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
        <section className="flex flex-row justify-between space-x-10">
          <BalanceBox />
          <MoneyTransfer />
        </section>
        <SpendingGraph />
      </main>
      <div className="flex w-1/3 justify-center text-center p-10">
        Profile Summary
      </div>
    </div>
  );
}
