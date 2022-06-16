import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckPurchase = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.metaSkeletonContract;
  const contract = SkeletonContract(tokenAddress, web3);
  const Purchase = useCallback(
    async () => {
      const details = await contract.methods.maxPurchase().call();;
      return details;
    },
    [contract]
  );

  return { Purchase: Purchase };
};

export default CheckPurchase;
