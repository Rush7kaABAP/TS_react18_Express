import React from 'react';
// import { useAppSelector } from '../../store/model/storeModel';

export const withAuthorization = (WrappedComponent: any) => {
  return (props:any) => {
    // const isAuthorized = useAppSelector(selectIsAuthorized);
    const isAuthorized = true;

    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};