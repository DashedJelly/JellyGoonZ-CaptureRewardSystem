import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { ConnectWallet, MediaRenderer } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    
    <div className={styles.container}>
      <ConnectWallet/>
      {/* Top Section */}
      <h1 className={styles.h1}>LAB 33 : G00NZ</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <img src="https://ipfs.thirdwebcdn.com/ipfs/QmY5ZLAHfGTa27pEpS7ZCMnV625wveTBfAkboiPNENCAaU/goonzgif.gif" alt="drop" width={300} height={300} />
          <h2 className={styles.selectBoxTitle}>JELLYG00NZ MINT</h2>
          <p className={styles.selectBoxDescription}>
            Mint a JELLYG00N for 3333 $JELLY
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <MediaRenderer src="ipfs://QmcPsp5aqMMCNdqk4igfPPuo2KqjoW3AFaR5hGww8iPd5R/mush%20lab.png" />
          <h2 className={styles.selectBoxTitle}>Capture Reward System</h2>
          <p className={styles.selectBoxDescription}>
            Bring All Captured JellyGoonz into the Lab Please...
          </p>
        </div>
        </div>
      </div>
    
  );
};

export default Home;