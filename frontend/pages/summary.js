import OverviewSummary from "../components/OverviewSummary";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Summary() {
  const width =
  //  useWindowWidth() || 
   1024;
  const BREAKPOINT = 1024;

  return (
    <div className="flex flex-row w-full">
      {width >= BREAKPOINT && (
        <>
          <OverviewSummary width="w-2/3" border="border-r-2 border-slate-100" />
          <div className="flex w-1/3 justify-center text-center p-10">
            Profile Summary
          </div>
        </>
      )}

      {width < BREAKPOINT && (
        <>
          <OverviewSummary width="w-fill" />
        </>
      )}
    </div>
  );
}
