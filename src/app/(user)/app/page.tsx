"use client";
import {useEffect} from 'react';
import {useRouter} from "next/navigation";

const AppPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/app/home')
  }, []);
};

export default AppPage;
