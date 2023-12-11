import axios from 'axios';
import React,{ useState } from 'react';
import {Container,Card} from 'react-bootstrap';
const Flag = () => {
  const [Country,setcountry]=useState([]);
  const [search,setsearch]=useState('');
  axios.get('https://disease.sh/v3/covid-19/countries').then((res)=>{
    setcountry(res.data);
  })
  // console.log(Country);
  return (
    <>
        <Container>
          <div className='text-danger text-center mt-4'>
          <h1 className='pb-2'>Search Country</h1>
          <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='Search Country' className='form-control m-auto w-25 shadow-none text-bold' />
          </div>
                  <div className="row">
                     {Country.length===0 ? <div className="text-center">
                    <div style={{ width: "5rem", height: "5rem",}}
                     className="spinner-border mt-5" role="status">
                    </div>
                  </div>
                     :Country.filter(data=>{
                        return search.toLowerCase()==='' ? data : data.country.toLowerCase().includes(search)
                     }).map((items,index)=>{
                      return (
                        <>
                        <div key={index} className="col col-md-3">
                        <Card className='mt-5 shadow-lg fs-bold rounded'>
                            <Card.Img variant="top" className='p-2' src={items.countryInfo.flag}/>
                            <Card.Body>
                                <Card.Title className='text-center fs-4 d-flex justify-content-evenly align-items-center'>{items.country}</Card.Title>
                                 <div className=''>
                                 <p className='fs-4 text-danger mt-3 fw-bold'>Total</p>
                                <Card.Text className='fs-4 fw-500 fw-bold'>
                                     {items.cases}
                                </Card.Text>
                                 </div>
                            </Card.Body>
                        </Card>
                       </div>
                        </>
                      )
                     })}
                </div>
      </Container>
    </>
  )
}

export default Flag;