import Link from "next/link";
import {
  Summarize,
  SyncAlt,
  AccountBox,
  FolderSpecial,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center px-5">
      <Link href="/">App Icon</Link>
      <div className="flex flex-col justify-center items-center w-120 h-full space-y-10">
        <Summarize onClick={() => console.log("Summary")} />
        Summary
        <SyncAlt onClick={() => console.log("Transfer")} />
        Transfer
        <AccountBox onClick={() => console.log("Account")} />
        Account
        <FolderSpecial onClick={() => console.log("Portfolio")} />
        Portfolio
      </div>
      <button>Settings</button>
    </div>
  );
};

export default Sidebar;
