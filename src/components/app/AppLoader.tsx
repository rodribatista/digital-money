import {useEffect} from 'react';
import {authSwal} from "@/lib/sweet";

export const AppLoader = () => {
  useEffect(() => {
    authSwal.fire({
      title: 'Cargando...',
      didOpen: () => {
        authSwal.showLoading()
      }
    });
    return () => {
      authSwal.close();
    }
  }, []);
  return null;
};
