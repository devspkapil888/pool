import "./navbar.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DialogBox from "../../components/Dialog/Dialogbox";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar" >
      <div className="wrapper"  aria-label="sticky table">
      <div className="items">
        <Stack direction="row" stickyHeader spacing={2}>
          {/* <Button variant="outlined" className="dropdown_btn" startIcon={<DeleteIcon />}>
            <span>Chain</span><span style={{ color: "red"}}>Unsupported</span>
          </Button> */}
          <DialogBox/>
          <Button variant="contained" className="connect_btn " startIcon={<AccountBalanceWalletIcon />}>
            Connect Wallet
          </Button>
        </Stack>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
