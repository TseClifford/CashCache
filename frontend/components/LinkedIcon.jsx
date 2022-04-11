import Link from "next/link";
import {
  Summarize,
  SyncAlt,
  AccountBox,
  FolderSpecial,
} from "@mui/icons-material";

const LinkedIcon = (props) => {
  const feature = props.feature;
  let icon;

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
      <a className="items-center text-center">
        {icon}
        {feature}
      </a>
    </Link>
  );
};

export default LinkedIcon;
