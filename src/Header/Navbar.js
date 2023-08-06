import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from './Logo'
export default function Navbar(props) {
    const { items } = props
    return (
        <div >
            <div style={{ justifyContent: "space-between", display: "flex",width:"100%" 
        ,minWidth:1475}}>

                <div className='mx-4 my-5'>
                    <Link to='/CustomerService'>
                        <Button variant="outline-light" style={{
                            color: "black",
                            border: "white", fontSize: 19, fontFamily: " Georgia"
                        }}
                        >
                            CustomerService
                        </Button>
                    </Link>

                    <Link to='/NewsLetter'>
                        <Button variant="outline-light" style={{
                            color: "black",
                            border: "white", fontSize: 19, fontFamily: " Georgia"
                        }}
                        >
                            Newsletter
                        </Button>
                    </Link>

                    <Link to='/Products'>
                        <Button variant="outline-light" style={{
                            color: "black",
                            border: "white", fontSize: 19, fontFamily: " Georgia"
                        }}
                        >
                            Products
                        </Button>
                    </Link>

                </div>

                <div className='mt-3'>

                    <Logo />

                </div>

                <div className='mx-5 my-5'>

                    <Link to='/SignIn'>
                        <Button variant="outline-light" style={{
                            color: "black",
                            border: "white", fontSize: 19, fontFamily: " Georgia"
                        }}
                        >
                            Sign in
                        </Button>
                    </Link>

                 <Link to='/Fav'>
                        <Button variant="outline-light" style={{
                        color: "black",
                        border: "white", fontSize: 19, fontFamily: " Georgia"
                    }}
                    >
                        Favourites
                        </Button>
                  </Link>

                  <Link to='/Cart'>

                    <Button variant="outline-light" style={{
                        color: "black",
                        border: "white", fontSize: 19, fontFamily: " Georgia"
                    }}
                    >
                        Shoping bag({items.length})

                    </Button>
                    
                   </Link>
                </div>

            </div>
        </div>



    )
}
