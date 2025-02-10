"use client";

import Loader from '@/components/components/loader';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllConsultantAPI, getConsultant} from "../Apis/ConsultantApi"
import { setConsultant, setIsAuthenticated, setRole } from '@/slices/consultantSlice';
import { setClient, setTotalClients } from '@/slices/clientSlice';
import { setAllConsultants } from '@/slices/adminSlice';

const Portal = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.consultant);
  const dispatch=useDispatch();
  
  const fetchConsultants=async()=>
    {
      const res=await getAllConsultantAPI()
      if (res)
        dispatch(setAllConsultants(res));
    }
  
  const getCurrentConsultant=async()=>
  {
    const res=await getConsultant();
    if (res)
    { console.log(res);
      const {consultant:Consultant,numClients}=res;
      const consultant={
        firstName:Consultant.firstName,
        lastName:Consultant.lastName,
        id:Consultant._id,
        email:Consultant.email,
        phoneNumber:Consultant.phoneNumber
      }
      dispatch(setIsAuthenticated(true));
      dispatch(setConsultant(consultant))
      dispatch(setRole(Consultant.role));
      dispatch(setClient(Consultant.clients));
      dispatch(setTotalClients(numClients));
      if (Consultant.role=="Admin")
        await fetchConsultants()
      
    
    
     
   
    }
    else
    {
      dispatch(setIsAuthenticated(false));
    }
  }

  
  useEffect(()=>
  { 
    getCurrentConsultant();
  },[dispatch])

  useEffect(() => {
    if (isAuthenticated !== null) {
     
        if (isAuthenticated) {
          window.electronAPI.notifyLoginSuccess(); 
          router.replace('/dashboard'); 
        } else {
          window.electronAPI.notifyLoginFailed();
          router.replace('/SignIn'); 
        }
      
    }
  }, [router, isAuthenticated]);



    return <Loader />; 
};

export default Portal;
