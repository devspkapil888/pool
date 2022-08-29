import "./navbar.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DialogBox from "../../components/Dialog/Dialogbox";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal"
import { ethers, providers } from "ethers"
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import { providerOptions } from "../../wallet/providerOptions"
import Walletindex  from "../../wallet/Walletindex"

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  //const [web3Provider, setWeb3Provider] = useState(null);
  // const [address, setAddress] = useState()

  // useEffect(() => {
  //   let web3Modal = new Web3Modal({
  //     cacheProvider: true,
  //     providerOptions,
  //   });
  //   setWeb3Provider(web3Modal)
  // }, []);
  // useEffect(() => {
  //   // connect automatically and without a popup if user is already connected
  //   if (web3Provider && web3Provider.cachedProvider) {
  //     connectWallet()
  //   }
  // }, [web3Provider])

  // // async function connectWallet() {
  // //   try {
  // //     // let web3Modal = new Web3Modal({
  // //     //   cacheProvider: false,
  // //     //   providerOptions,
  // //     // });
  // //     const web3ModalInstance = await web3Provider.connect();
  // //     console.log("@@", web3ModalInstance);
  // //     // const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance)
  // //     // if (web3ModalProvider) {
  // //     //   setWeb3Provider(web3ModalProvider)
  // //     // }
  // //   } catch (err) {
  // //     console.error(err);
  // //   }
  // // }

  // async function connectWallet() {
  //   try {
  //     const provider = await web3Provider.connect();

  //     addListeners(provider);

  //     const ethersProvider = new providers.Web3Provider(provider)
  //     console.log(ethersProvider);
  //     const userAddress = await ethersProvider.getSigner().getAddress()
  //     console.log(userAddress);
  //     setAddress(userAddress)
  //   } catch (err) {
  //     console.log("ERROR", err);

  //   }

  // }

  // async function addListeners(web3ModalProvider) {

  //   web3ModalProvider.on("accountsChanged", (accounts) => {
  //     window.location.reload()
  //   });

  //   // Subscribe to chainId change
  //   web3ModalProvider.on("chainChanged", (chainId) => {
  //     window.location.reload()
  //   });
  // }

  // const refreshState = () => {
  //   setAddress();
  // };

  // const disconnect = async () => {
  //   await web3Provider.clearCachedProvider();
  //   refreshState();
  // };
  return (
    <div className="navbar" >
      <div className="wrapper" aria-label="sticky table">
        <div className="items">
          <Stack direction="row" stickyHeader spacing={2}>
            {/* <Button variant="outlined" className="dropdown_btn" startIcon={<DeleteIcon />}>
            <span>Chain</span><span style={{ color: "red"}}>Unsupported</span>
          </Button> */}
            <DialogBox />
            {/* {!address ? (<Button variant="contained" className="connect_btn " startIcon={<AccountBalanceWalletIcon />} onClick={connectWallet}>
              Connect Wallet
            </Button>) : (
              <div>
                <p>{address}</p>
                <Button variant="contained" className="connect_btn " startIcon={<AccountBalanceWalletIcon />} onClick={disconnect}>
                  Disconnect Wallet
                </Button>
              </div>
            )} */}
            <div>
              <Walletindex/>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
