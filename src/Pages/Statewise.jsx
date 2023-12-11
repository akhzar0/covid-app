import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
const Statewise = () => {
    const [state, setstate] = useState([]);
    const [statefilter, setStatefilter] = useState();
    const [filteredState, setFilteredState] = useState([]);
  
    useEffect(() => {
    statecovidData()
    }, [statefilter])

    useEffect(() => {
        getCovidData();
    }, []);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setstate(actualData.statewise);
        setFilteredState(actualData.statewise.filter(state=>state.state!=="Total"))
    }

    const statecovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setFilteredState(actualData.statewise.filter(state=>state.state===statefilter));
    }

    return (
        <>
            <Container>
                <Form>
                    <h1 className='py-4 text-bg-danger mt-3 text-center' style={{ fontSize: "3rem" }}>INDIA COVID 19 DASHBOARD</h1>
                    <Form.Group>
                        <h1 className='mb-4 mt-4'>Check State Update</h1>
                        <Form.Select className='shadow-none w-25'
                            onChange={(e)=>setStatefilter(e.target.value)}>
                             <option value="Uttar Pradesh">Select State</option>
                            {state.map((item, index) => {
                                return <option key={index}>{item.state}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
                <table className="table table-striped mt-4">
                    <thead className="thead-dark table-dark">
                        <tr>
                            <th>Sr No.</th>
                            <th scope="col" className='text-start'>State</th>
                            <th className='text-center' scope="col">Conform</th>
                            <th className='text-center' scope="col">Recover</th>
                            <th className='text-center' scope="col">Death</th>
                            <th className='text-center' scope="col">Delta Confirmed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredState.length === 0 ? <div className="text-center">
                            <div style={{ width: "5rem", height: "5rem", position: "relative", left: "450px" }}
                                className="spinner-border mt-5" role="status">
                            </div>
                        </div>
                            : filteredState.map((item, index) => {
                                return <>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td scope="row" className='text-start'>{item.state}</td>
                                        <td className='text-center' >{item.confirmed}</td>
                                        <td className='text-center'>{item.recovered}</td>
                                        <td className='text-center'>{item.deaths}</td>
                                        <td className='text-center'>{item.deltaconfirmed}</td>
                                    </tr>
                                </>
                            })}
                    </tbody>
                </table>
            </Container>
        </>
    )
}
export default Statewise;