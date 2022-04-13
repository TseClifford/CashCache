import { Box } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

const BalanceBox = () => {
  const dailyPrice = 3.14;
  let priceColor = "white";
  let priceMovement;

  if (dailyPrice > 0) {
    priceColor = "green";
    priceMovement = <ArrowDropUp />;
  }
  if (dailyPrice < 0) {
    priceColor = "red";
    priceMovement = <ArrowDropDown />;
  }

  return (
    <Box className="flex flex-col justify-between w-1/2 p-5 max-w-md bg-white rounded-3xl space-y-5 overflow-clip">
      <p className="font-bold">Your Total Balance</p>
      <p className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-800">
        $123,000
      </p>
      <p className="text-slate-400">April 12, 2022 • 12:19 PM</p>
      <Box
        className={`flex flex-row justify-center items-center self-center h-4 p-5 rounded-xl bg-${priceColor}-100 text-${priceColor}-600`}
      >
        {priceMovement ? priceMovement : null}
        {dailyPrice !== 0 ? <p>{dailyPrice}%</p> : null}
      </Box>
    </Box>
  );
};

export default BalanceBox;
