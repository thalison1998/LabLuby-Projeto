import axios from 'axios';
import React from 'react'

export const useFetch =  () => {

    const [info, setInfo] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const request = React.useCallback(async (url, options) => {
        let response;
        try {
          setError(null);
          setLoading(true);
          response = await axios.get(url, options);
          if(response.status === 200){
             return setInfo( response.data); 
          }

        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);  
          return { response };
        }
      
      }, []);
    
      return {
        info,
        loading,
        error,
        request,
      };
}