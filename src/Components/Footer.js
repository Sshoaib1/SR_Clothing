import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { footerProd, Corporate, Help, Signup } from '../Alldata/Foot'
export default function Footer(props) {
  return (

    <div className='mt-5'

      style=

      {{
        backgroundColor: "#e9ecef",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}

    >

      <div
        style=

        {{
          justifyContent: "center",
          height: 480,
          padding: 100

        }}

      >

        <h5 className='mx-2'>
          <b> SHOP </b>
        </h5>

        {

          footerProd.map((p) => {

            return (
              <Col key={p.id1} >

                <Button variant="outline-light" style={{
                  color: "black",
                  border: "white", fontSize: 16, fontFamily: " Georgia", textAlign: "center"
                }}
                  onClick={() => {
                    props.onChangeCat(p.id);
                    props.handlePageChange(p.id);
                  }}
                >

                  {p.id}

                </Button>
              </Col>

            )
          })


        }

      </div>

      <div

        style=
        {{

          padding: 100

        }}
      >

        <h5 className='mx-2'>
          <b>CORPORTAE INFO</b>
        </h5>

        {

          Corporate.map((p) => {

            return (
              <Col key={p.id1} >

                <Button variant="outline-light" style={{
                  color: "black",
                  border: "white",
                  fontSize: 16,
                  fontFamily: " Georgia",
                }}

                  onClick={() => {
                    props.onChangeCat(p.id);
                    props.handlePageChange(p.id);
                  }}
                >

                  {p.id}

                </Button>
              </Col>
            )
          })
        }
      </div>

      <div

        style=
        {{

          padding: 100

        }}
      >

        <h5 className='mx-2'>
          <b>HELP</b>
        </h5>

        {

          Help.map((p) => {

            return (
              <Col key={p.id1} >

                <Button variant="outline-light" style={{
                  color: "black",
                  border: "white",
                  fontSize: 16,
                  fontFamily: " Georgia",
                }}

                  onClick={() => {
                    props.onChangeCat(p.id);
                    props.handlePageChange(p.id);
                  }}
                >

                  {p.id}

                </Button>
              </Col>
            )
          })
        }
      </div>
      <div

        style=
        {{

          padding: 100

        }}
      >

        <h5 className='mx-2'>
          <b>Sign up for newsletter</b>
        </h5>

        <span className='mx-2'>
          Sign up now and be the first to know about 
        </span>
        {

          Signup.map((p) => {

            return (
              <Col key={p.id1} className='my-5'>

                <Button variant="outline-light" style={{
                  color: "black",
                  border: "white",
                  fontSize: 20,
                  fontFamily: " Georgia",
                }}

                  onClick={() => {
                    props.onChangeCat(p.id);
                    props.handlePageChange(p.id);
                  }}
                >
              
                  {p.id}

                </Button>
              </Col>
            )
          })
        }
      </div>

    </div>
  )
}
