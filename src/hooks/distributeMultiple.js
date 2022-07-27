import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { tokenContract } from "../utils/contractHelpers";
import BigNumber from "bignumber.js";

export const DistributeMultiple = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.disperser;
  const contract = tokenContract(tokenAddress, web3);
  const DisperseMulti = useCallback(
    async (tokenaddy, walletArr, userPrices) => {
      try {
         

        for (let elem = 0; elem < userPrices.length; elem++) {
          userPrices[elem] = web3.utils.toWei(
            JSON.stringify(userPrices[elem]), 'ether'
          )
         
        }

        console.log("heree i m", userPrices)
        const nfts = await contract.methods
          .distributeMultiple(tokenaddy,walletArr, userPrices)
          .send({
            from: account,
         
          })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .catch((error) => {
            console.log("erorrrr in catcccchhh", error);
            return false;
          });
        return nfts;
      } catch (error) {
        console.log("error::::", error);
        return false;
      }
    },
    [account, contract]
  );

  return { DisperseMulti: DisperseMulti };
};

export default DistributeMultiple;
