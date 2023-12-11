import React, { useEffect, useState } from 'react';
import { Card, CardGroup,Col } from 'react-bootstrap';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Cards from './Cards';
const Home = () => {
    const [allData, setAllData] = useState([]);

    const getallData = async () => {
        await axios.get('https://disease.sh/v3/covid-19/all').then((res) => {
            setAllData(res.data);
        })
    }
    // console.log(allData);
    useEffect(() => {
        getallData();
    }, [])
    return (
        <>
            <div className="container">
                <div className="card-body mt-3">
                    <div className='pt-5'>
                        <div className='text-center'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Active</th>
                                        <th>Case</th>
                                        <th>Population</th>
                                        <th>Critical</th>
                                        <th>Recovered</th>
                                        <th>Tests</th>
                                        <th>Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {allData.length === 0 ? <h2 className='text-center'>Loading.....</h2>:
                                        <>
                                            <tr>
                                            <td>1</td>
                                            <td>{allData.active}</td>
                                            <td>{allData.cases}</td>
                                            <td>{allData.population}</td>
                                            <td>{allData.critical}</td>
                                            <td>{allData.recovered}</td>
                                            <td>{allData.tests}</td>
                                            <td>{allData.deaths}</td>
                                            </tr>
                                        </>
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                <div className='row'>
               <div className='col col-md-3'>
               <Cards deaths={allData.active} title="Active" src="https://assets.telegraphindia.com/telegraph/2022/Feb/1645211570_covid.jpg"/>
               </div>
               <div className='col col-md-3'>
               <Cards deaths={allData.cases} title="Case" src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=600"/>
               </div>
               <div className='col col-md-3'>
               <Cards deaths={allData.critical} title="Critical" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwO8JGTqkrpc-ZxgAM__cxBnPvaBr8snAHg&usqp=CAU"/>
               </div>
               <div className='col col-md-3'>
               <Cards deaths={allData.recovered} title="Recovered" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWrg_GeLgtDdG_xe0-z6oLgC5X_pEZOIM3w&usqp=CAU" />
               </div>
                </div>
                </div>
                    <div>
                </div>
            </div>
        </>
    )
}
export default Home;