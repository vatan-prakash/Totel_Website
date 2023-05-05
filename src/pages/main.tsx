import Head from 'next/head';
import Navbar from '../Component/NavbarM/Navbar';
import  Main  from '../Component/Main/main';
import Footer from '../Component/FooterM/Footer';
// Namespace 'global.JSX' has no exported member 'Element'.

import React, { JSX } from 'react';
// import React, { JSXElementConstructor, ReactElement } from 'react';



import { useState } from 'react';

interface Props {
  step: number;
}

interface FooterProps {
  nextStep: () => void;
  backStep: () => void;
}

function Index(): JSX.Element {
  const [step, setStep] = useState<number>(1);
  
  const nextStep = (): void => {
    setStep(step + 1);
  }
    
  const backStep = (): void => {
    if(step === 1) return;
    setStep(step - 1);
  }
  
  return (
    <>
      <Head children={undefined}>
        <title> Total Partner website</title>
      </Head>   
      <Navbar />
      <Main step={step} />
      <Footer nextStep={nextStep} backStep={backStep} />
    </>
  );
}

export default Index;
