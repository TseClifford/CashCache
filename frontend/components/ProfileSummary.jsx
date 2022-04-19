import { Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileSummary = () => {
  return (
    <main className="flex flex-col w-1/3 text-center p-10 space-y-10">
      <section className="flex flex-row justify-between h-[60px] items-center">
        <Box className="flex items-center p-2 h-[40px] bg-white rounded-xl text-slate-400">
          <NotificationsIcon />
        </Box>
        <Box className="flex items-center p-1 bg-white rounded-3xl text-slate-400">
          <AccountCircleIcon className="text-5xl" />
        </Box>
      </section>
      <section id="credit-cards" className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <b>Your Card</b>
          <MoreHorizIcon className="text-slate-300" />
        </div>
        <b>Some Credit Card Image</b>
      </section>
    </main>
  );
};

export default ProfileSummary;
