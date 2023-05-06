import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>JELLYG00NZ</h1>

      <p className={styles.explain}>
        MINT YOUR JELLYGOON HERE
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="light"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("G00N Captured!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      ><MediaRenderer src="ipfs://Qmf8YEt5L1su6Yqe9scQpe6NodCxFSSHD8fFrFiv9WFobd/goonzbanner.png" width="70"/>
        10 Matic
      </Web3Button>
    </div>
  );
};

export default Mint;
