import Link from "next/link";
import {
  Summarize,
  SyncAlt,
  AccountBox,
  FolderSpecial,
} from "@mui/icons-material";

const LinkedIcon = (props) => {
  const feature = props.feature;
  let styling = "text-slate-400 hover:text-purple-800";
  let icon;

  if (props.selected === true) {
    styling = "text-purple-800";
  }

  switch (feature) {
    case "Summary":
      icon = <Summarize />;
      break;
    case "Transfer":
      icon = <SyncAlt />;
      break;
    case "Account":
      icon = <AccountBox />;
      break;
    case "Portfolio":
      icon = <FolderSpecial />;
      break;
  }

  return (
    <Link href={"/" + feature.toLowerCase()}>
      <a className={`flex flex-col items-center text-center ${styling}`}>
        {icon}
        {feature}
      </a>
    </Link>
  );
};

export default LinkedIcon;
