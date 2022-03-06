import {
    Link
} from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import { ClipboardCopyIcon } from "@heroicons/react/outline"
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import { useIsMounted } from '../../hooks/useIsMounted';
const HeaderComponent = () => {
    const isMounted = useIsMounted()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
      })
    const [{ data, error,connected }, connect] = useConnect()
    // console.log(data)
    // console.log(accountData)

    return <>
        <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <Container>
                <Navbar.Brand href="/"><img src="images/logo.png" alt="logo image" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav  >
                        <Link to="/" className={"nav-link"} >Home</Link>
                        
                        <Link to={"/minter"} className={"nav-link"}>Minter</Link>
                        <Link to="/collections" className={"nav-link"}>collections</Link>
                        {
                            accountData ? <NavDropdown title="Wallet Connected" id="basic-nav-dropdown">
                                <NavDropdown.Item > <span className='text-dark' onClick={() => navigator.clipboard.writeText(accountData.address)}>
                                    {`${[...accountData?.address].splice(0, 6).join("")}...${[...accountData?.address].splice(37).join("")} `}
                                    <ClipboardCopyIcon className="text-dark icon-sizing "></ClipboardCopyIcon>
                                </span></NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => {
                                    disconnect();
                                }}>Disconnect</NavDropdown.Item>
                            </NavDropdown> :  data.connectors.map((x) => { return <Button variant="outline-light" onClick={() => { connect(x) }}> Connect   {x.name}</Button> })
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;


    // {data.connectors.map((x) => (
    //     <div className="w-2/6">
    //         <button className="py-3 w-full bg-white rounded-sm hover:bg-slate-100" disabled={!x.ready} key={x.id} onClick={() => {
    //             connect(x)
    //             navigate("/myprofile", {replace: true})
    //         }}>
    //             {x.name}
    //             {!x.ready && ' (unsupported)'}
    //         </button>
    //     </div>

    // ))}
}
export default HeaderComponent;
