import BalanceBox from "../components/WindowElements/BalanceBox";

export default function Summary() {
  return (
    <div className="flex flex-row w-full">
      <main className="flex flex-col w-2/3 text-center px-5 py-10 bg-yellow-100 space-y-10">
        <section className="flex flex-row justify-between items-center">
          <div>
            <p>CashCache Summary</p>
            <p>Good Evening, Clifford!</p>
          </div>
          <div>Search Bar</div>
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
