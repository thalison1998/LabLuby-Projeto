import React from 'react'
import { Container } from './styles'

export const Loading = () => {

    const [step, setStep] = React.useState(1);

    React.useEffect(() => {
        const updateStep = () => {
          setStep((step) => {
            if (step < 3) return step + 1;
            else return 0;
          });
        }
        const interval = setInterval(updateStep, 200);
       
        return () => {
          clearInterval(interval);
        };
      }, []);

      const displayStep = (i) => { 
        return {
          opacity: step === i ? '1' : '0',
        };
      }

    return (
        <Container>
            <div>
                <h1 className='title-loading'>AutoLuby</h1>
                <svg width="157" height="10" viewBox="0 0 157 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect  style={displayStep(2)} x="60" width="37" height="10" fill="#F54A48"/>
                <rect style={displayStep(3)} x="120" width="37" height="10" fill="#F54A48"/>
                <rect  style={displayStep(1)}width="37" height="10" fill="#F54A48"/>
                </svg>
            </div>
        </Container>
    )
}
