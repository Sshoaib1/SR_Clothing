import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Search() {
  return (
    <div className='mt-4'>
      <Form style={{ display: "flex" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  )
}
