import BalanceBox from "./WindowElements/BalanceBox";
import MoneyTransfer from "./WindowElements/MoneyTransfer";
import SpendingGraph from "./WindowElements/SpendingGraph";
import SearchBar from "./WindowElements/SearchBar";

const OverviewSummary = (props) => {
  let addBorder = "";
  if (props.width == "w-2/3") addBorder = "border-r-2 border-slate-100";

  return (
    <main
      className={`flex flex-col ${props.width} text-center p-10 space-y-10 ${addBorder}`}
    >
      <section className="flex flex-row justify-between items-center">
        <div className="text-left">
          <p className="text-2xl">
            <b>CashCache</b> Summary
          </p>
          <p className="text-slate-400 text-lg">Good Evening, Clifford Tse!</p>
        </div>
        <SearchBar placeholder={"Search activity or another..."} />
      </section>
      <section className="flex flex-row justify-between space-x-10">
        <BalanceBox />
        <MoneyTransfer />
      </section>
      <SpendingGraph />
    </main>
  );
};

export default OverviewSummary;
