import React, { useEffect, useState } from 'react';

import { Row, Container, Button,Col } from 'react-bootstrap';
import { useAccount } from 'wagmi';

import fetchNFTs from '../../services/fetchNFTs'
import NftCard from './nftcard';
const contractAddress = "0x4203E39Dc6e12d9224681A0275B8bC61F00f7014";

const CollectionView = () => {
    const [{ data: accountData, loading }, disconnect] = useAccount()

    const [NFTs, setNFTs] = useState()
    // useEffect(async () => {
    //     console.log("accountData", accountData)

    // }, [])

    const fetchNFTfromAccount = async () => {
        console.log("accountData", accountData)
        if (accountData) {

            const data = await fetchNFTs(accountData.address, contractAddress)
            setNFTs(data)
            console.log("data", data)
        }
    }


    return <section id="collections" className="collection-section">
        <Container>
            <Row className=" text-center">
                <h1 className="display-3 fw-bold">Collections</h1>
                <div className="heading-line mb-1"></div>
            </Row>
            <Row>
                {
                    NFTs ? NFTs.map(NFT => {
                        console.log(NFT)
                        return (
                            <NftCard key={NFT.value.id + NFT.value.contractAddress} image={NFT.value.image} id={NFT.value.id} title={NFT.value.title} description={NFT.value.description} address={NFT.value.contractAddress} ></NftCard>
                        )
                    }) :
                        <div className='text-center'>No NFTs found
                        </div>


                }
            </Row>
            <Row className=' pt-5 '>

                <Col md={4} className={"mx-auto"} >
                    <div className='d-flex justify-content-center'>
                <Button variant="primary" size="md" type="button" onClick={() => fetchNFTfromAccount()} >
                        Fetch NFT
                    </Button>
                    </div>
                </Col>
            </Row>

        </Container>
    </section>;
}
export default CollectionView;