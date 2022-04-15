import OverviewSummary from "../components/OverviewSummary";
import useWindowSize from "../hooks/useWindowSize";

export default function Summary() {
  const { width } = useWindowSize();
  const BREAKPOINT = 1024;

  return (
    <div className="flex flex-row w-[calc(100%-7em)]">
      {width && width >= BREAKPOINT && (
        <>
          <OverviewSummary width="w-2/3" border="border-r-2 border-slate-100" />
          <div className="flex w-1/3 justify-center text-center p-10">
            Profile Summary
          </div>
        </>
      )}

      {width && width < BREAKPOINT && (
        <>
          <OverviewSummary width="w-full" />
        </>
      )}
    </div>
  );
}
