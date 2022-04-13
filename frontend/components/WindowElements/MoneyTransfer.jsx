import { Box, TextField, InputAdornment, Button } from "@mui/material";
import { EmailOutlined, AttachMoney } from "@mui/icons-material";

const MoneyTransfer = () => {
  return (
    <Box className="flex flex-col justify-between w-1/2 p-5 max-w-md bg-white rounded-3xl space-y-5 overflow-clip">
      <b className="flex align-left">Send Money</b>
      <TextField
        id={"emailInput"}
        size="small"
        placeholder="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlined className="text-slate-300" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="amountInput"
        size="small"
        placeholder="Amount"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoney className="text-slate-300" />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" className="bg-purple-800 hover:bg-purple-600">
        Send Money
      </Button>
    </Box>
  );
};

export default MoneyTransfer;
