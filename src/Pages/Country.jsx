import React, { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import axios from 'axios';
const Country = () => {
  const [Country, setcountry] = useState([]);
  const [search, setsearch] = useState('');
  const [option,setoption] =useState();
  const getData = () => {
    axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
      setcountry(res.data)
    })
  }
  console.log(option);
  
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <Container className='mt-4'>
        <h2>{new Date().toUTCString().slice(0, 16)}</h2>
        <h1 className='mt-4 text-danger'>Covid Country Updates</h1>
        <Form>
          <div className="row">
            <div className="col-md-3">
              <Form.Group>
                <h4 className='mt-4'>Search Country Name</h4>
                <Form.Control onChange={(e)=>setsearch(e.target.value)}
                  placeholder='Country Name...' className='w-100 mt-3 shadow-none' />
              </Form.Group>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
            </div>
          </div>
        </Form>
        <table className="table table-striped mt-4">
          <thead className="thead-dark table-dark">
            <tr>
              <th>Sr No.</th>
              <th scope="col">Flages</th>
              <th scope="col">Country</th>
              <th className='text-center' scope="col">Active</th>
              <th className='text-center' scope="col">Cases</th>
              <th className='text-center' scope="col">Recovered</th>
              <th className='text-center' scope="col">Tests</th>
              <th className='text-center' scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            {Country.length == 0 ? <div className="text-center">
              <div style={{ width: "5rem", height: "5rem", position: "relative", left: "550px" }}
                className="spinner-border mt-5" role="status">
              </div>
            </div>
              : Country.filter((data) => {
                return search.toLowerCase=== '' ? data : data.country.toLowerCase().includes(search)
              }).map((item, index) => {
                return <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td scope="row"><img className='w-50' height={40} src={item.countryInfo.flag} alt="" /></td>
                    <td scope="row">{item.country}</td>
                    <td className='text-center'>{item.active}</td>
                    <td className='text-center'>{item.cases}</td>
                    <td className='text-center'>{item.recovered}</td>
                    <td className='text-center'>{item.tests}</td>
                    <td className='text-center'>{item.deaths}</td>
                  </tr>
                </>
              })}
          </tbody>
        </table>
      </Container>
    </>
  )
}

export default Country;