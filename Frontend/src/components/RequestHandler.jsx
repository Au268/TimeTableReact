import React,{useEffect,useState} from 'react'
import Nav from './requestHandler/nav';
import SubNavBar from './requestHandler/subNavBar';
import RequestData from './requestHandler/requestData';
import fetchCrs from '../api/getCrs';

const RequestHandler = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            const result = await fetchCrs(); 
            setData(result); 
                      
        };

        getData();
    },[data])

    return (
        <div>
            <Nav />
            <SubNavBar />
            <RequestData data = {data} />
        </div>
    )
}

export default RequestHandler;