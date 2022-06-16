import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckBalanceOf = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.metaSkeletonContract;
  const contract = SkeletonContract(tokenAddress, web3);
  const BalanceOf = useCallback(
    async (account) => {
      const details = await contract.methods.balanceOf(account).call();
      return details;
    },
    [account, contract]
  );

  return { BalanceOf: BalanceOf };
};

export default CheckBalanceOf;
