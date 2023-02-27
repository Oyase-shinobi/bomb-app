import React from 'react';
import BombFinanceSummary from './components/BombFinanceSummary';
import ReadInvestMentStrategy from './components/ReadInvestmentStrategy';
import InvestnowAndLatestNews from './components/InvestnowAndLatestNews';
import BombFarmComponent from './components/BombFarmsComponent';
import BondsFunc from './components/BondsComponent';
import HomeImage from '../../assets/img/background.jpg';
import { createGlobalStyle } from 'styled-components';
import Page from '../../components/Page';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;



const Dashboard = () => {
    return (
      <>
        <Page>
        <div className='MainCenterDiv'>
            <BackgroundImage />
            <BombFinanceSummary />
            <ReadInvestMentStrategy/>
            <InvestnowAndLatestNews/>
            <BombFarmComponent/>
            <BondsFunc/>
        </div>
        </Page>
      </>
    )
}

export default Dashboard;


