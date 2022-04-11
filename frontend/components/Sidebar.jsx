import Link from "next/link";
import LinkedIcon from "./LinkedIcon";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center p-5">
      <Link href="/">App Icon</Link>
      <div className="flex flex-col justify-center items-center w-120 h-full space-y-10">
        <LinkedIcon feature={"Summary"} />
        <LinkedIcon feature={"Transfer"} />
        <LinkedIcon feature={"Account"} />
        <LinkedIcon feature={"Portfolio"} />
      </div>
      <button>Settings</button>
    </div>
  );
};

export default Sidebar;
