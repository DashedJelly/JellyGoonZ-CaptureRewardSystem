import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
<MediaRenderer src="ipfs://Qmf8YEt5L1su6Yqe9scQpe6NodCxFSSHD8fFrFiv9WFobd/goonzbanner.png" width="200"/>

  return (
    
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
     
<MediaRenderer src={"https://ipfs.thirdwebcdn.com/ipfs/QmdrYNRn6ruhGSfhPmXzDmijKL7a7ip8rej23aadWCMMEG/goonztitle.png"} height="20"/>
      
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
  Mint for 4200$JELLY
</Web3Button>
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
