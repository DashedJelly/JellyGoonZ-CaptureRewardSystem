import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { ConnectWallet, MediaRenderer } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    
    <div className={styles.container}>
      
      <div></div>
      <ConnectWallet theme="dark"/>
      {/* Background Image */}
      <div className={styles.backgroundImage}></div>

      {/* Top Section */}
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <img
            src="https://ipfs.thirdwebcdn.com/ipfs/QmY5ZLAHfGTa27pEpS7ZCMnV625wveTBfAkboiPNENCAaU/goonzgif.gif"
            alt="drop"
            width={300}
            height={300}
          />
          <h2 className={styles.selectBoxTitle}>JELLYG00NZ MINT</h2>
          <p className={styles.selectBoxDescription}>
            Mint a JELLYG00N 10 Matic
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
        <div><MediaRenderer src="https://ipfs.thirdwebcdn.com/ipfs/QmdrYNRn6ruhGSfhPmXzDmijKL7a7ip8rej23aadWCMMEG/goonztitle.png"/></div>
      </div>
    </div>
  );
};

export default Home;
