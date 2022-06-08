import React from 'react';
import {useSigner} from '@thirdweb-dev/react';
import {ThirdwebSDK} from '@thirdweb-dev/sdk';



const index = () => {
    const signer = useSigner();
    const sdk = ThirdwebSDK.fromSigner(signer);

    const nftColl = sdk.getNFTCollection("0x632190B39d505adE9c52B2b788E9494471160D90");
    console.log('the nft collection is',nftColl)
  return (
    <h1>Test page</h1>
  )
}

export default index