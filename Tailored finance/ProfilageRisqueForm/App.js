import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ConnaissanceExperience from './components/ConnaissanceExperience';
import ProfilRisque from './components/ProfilRisque';
import CapacitePertes from './components/CapacitePertes';
import Result from './components/Result';
import Head from 'next/head';

const theme = createTheme();

function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    investmentKnowledge: '',
    investmentExperience: '',
    financialProducts: {
      fondsEuros: { knowledge: false, experience: false },
      livretA: { knowledge: false, experience: false },
      actionsCotees: { knowledge: false, experience: false },
      obligations: { knowledge: false, experience: false },
      sicav: { knowledge: false, experience: false },
    },
    riskProfile: '',
    lossCapacity: '',
  });

  const handleNext = (newData) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, ...newData }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (newData) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, ...newData }));
    setStep(4); // Move to the Result step
  };

  return (
    <>
   
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Questionnaire de Profil Investisseur
          </Typography>
          {step === 1 && (
            <ConnaissanceExperience
              answers={answers}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <ProfilRisque
              answers={answers}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <CapacitePertes
              answers={answers}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}
          {step === 4 && <Result answers={answers} />}
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;

