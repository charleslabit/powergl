import React,{useEffect} from "react";
import axios from "axios";

const JournalVoucher = () => {
  const api = 'http://192.168.80.186:2929/api/get/'
    useEffect(()=>{

        axios.get(api).then(data=>{
            console.log('DATA',data.data.data)
        })
    },[])
  return (
    <div
  
    >
      JournalVoucher
    </div>
  );
};

export default JournalVoucher;
