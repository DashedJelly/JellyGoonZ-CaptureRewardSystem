import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
<MediaRenderer src="ipfs://Qmf8YEt5L1su6Yqe9scQpe6NodCxFSSHD8fFrFiv9WFobd/goonzbanner.png" width="200"/>

  return (
    
    <div className={styles.container}>
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
>
  Mint for 10 Matic
</Web3Button>
      {/* Background Image */}
      <div className={styles.backgroundImage2}></div>
      <MediaRenderer src={"https://ipfs.thirdwebcdn.com/ipfs/QmdrYNRn6ruhGSfhPmXzDmijKL7a7ip8rej23aadWCMMEG/goonztitle.png"} height="20"/>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <p className={styles.explain}>
      
        Unique Collectibles w/Utility 
        <div></div>
        Collect-Stake-Earn 
        <div></div>
        100 in Supply
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      
      
      
    </div>
  );
};

export default Mint;
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
      ><MediaRenderer src="ipfs://Qmf8YEt5L1su6Yqe9scQpe6NodCxFSSHD8fFrFiv9WFobd/goonzbanner.png" width="30"/>
        10 Matic
      </Web3Button>
    </div>
  );
};

export default Mint;
