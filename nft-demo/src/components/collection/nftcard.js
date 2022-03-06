import { Col } from 'react-bootstrap';

const NftCard = ({ image, id, title, address, description, attributes }) => {
    return (<Col sm={6} md={4} lg={3} className="mt-4" >
        <div className="card card-inverse card-info">
           {image ? <img className="card-img-top" src={image}/> : null} 
            <div className="card-block">
                <h4 className="card-title"> {title}</h4>
                <div className="card-text">
                    
                    <p>{description? description.slice(0, 200) : "No Description"}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className='d-flex justify-content-end'>
                    <div><a target="_blank" className="btn btn-primary btn-sm" href={`https://rinkeby.etherscan.io/token/${address}`}>View on Etherscan</a></div>
                   
                </div>
            </div>
        </div>
    </Col>);
    // return (
    //     <div className="w-1/4 mr-3 mb-4 bg-slate-100 rounded-md" >
    //         <img className='w-full rounded-t-md' key={id} src={image}></img>
    //         <div className="p-3">
    //             <div className="flex mb-3">
    //                 <div className="flex-grow">
    //                     <h3 className="text-xl">{title}</h3>
    //                     <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
    //                 </div>
    //                 <div className="flex mr-3">
    //                     
    //                 </div>
    //             </div>
    //             <p>{description? description.slice(0, 200) : "No Description"}</p>
    //         </div>
    //         {/* <div className="flex flex-wrap justify-center items-center p-3 ">
    //             {attributes?.length > 0 && attributes.map(attribute => {
    //                 return (
    //                     <div className="w-1/2 mb-2 flex justify-start flex-col">
    //                         <p className="mr-2 font-bold">{attribute.trait_type}:</p>
    //                         <p className="text-sm">{attribute.value}</p>
    //                     </div>
    //                 )
    //             })}
    //         </div> */}
    //     </div>

}

export default NftCard