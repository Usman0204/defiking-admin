import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";
import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import { soliditySha3 } from "web3-utils";

const Minting = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const privKey =
    "46a47b4baaa44e316151a504e9f1ae2a9a2c3e3086d851f67efd4e243dcfe9d2";
  const provider = new HDWalletProvider(
    privKey,
    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  );
  const contractAddress = environment.metaSkeletonContract;
  const web31 = new Web3(provider);

  const contract = SkeletonContract(contractAddress, web3);
  const userMinting = useCallback(
    async (mintVal) => {
      const deadline = parseInt(Date.now() / 1000 + 400);
      const soliditySha3Expected = soliditySha3(
        environment.metaSkeletonContract,
        account,
        deadline,
        mintVal
      );
      let something = await web31.eth.accounts.sign(soliditySha3Expected, privKey);
      let fees = await contract.methods.price().call();
      fees = fees / 1000000000000000000;
      const MINT_NFT_FEE = mintVal * fees;
      const details = await contract.methods
        .mint(mintVal, deadline, something.v, something.r, something.s)
        .send({
          from: account,
          value: Web3.utils.toWei(MINT_NFT_FEE.toString(), "ether"),
        })
        .on("transactionHash", (tx) => {
          return tx.transactionHash;
        })
        .catch((err) => {
          return err;
        });
      return details;
    },
    [account, contract]
  );
  return { userMinting: userMinting };
};

export default Minting;
