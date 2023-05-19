import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { ConnectWallet, MediaRenderer } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      
      <ConnectWallet theme="dark"/>
      {/* Background Image */}

      {/* Top Section */}
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          
            <MediaRenderer src="https://ipfs.thirdwebcdn.com/ipfs/QmY5ZLAHfGTa27pEpS7ZCMnV625wveTBfAkboiPNENCAaU/goonzgif.gif" />
            
          <h2 className={styles.selectBoxTitle}>JELLYG00NZ MINT</h2>
          <p className={styles.selectBoxDescription}>
            Mint a JELLYG00N 4200$JELLY
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
