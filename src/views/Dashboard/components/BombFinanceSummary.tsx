import { Typography } from '@material-ui/core';
import moment from 'moment';
import React, { useMemo } from 'react';
import { roundAndFormatNumber } from '../../../0x';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';

//const { to } = useTreasuryAllocationTimes();
//const currentEpoch = useCurrentEpoch();
const BombFinanceSummary = () => {
  const tBondStats = useBondStats();
  const bShareStats = usebShareStats();
  const bombStats = useBombStats();
  const bombCirculatingSupply = useMemo(() => (bombStats ? Number(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? Number(bombStats.totalSupply) : null), [bombStats]);
  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(Number(bombStats.priceInDollars).toFixed(2)) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? Number(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? Number(bShareStats.totalSupply) : null), [bShareStats]);
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? Number(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? Number(tBondStats.totalSupply) : null), [tBondStats]);
  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  return (
    <>
      <div className="firstContainer">
        <p className="bombfinancesummary--heading">Bomb Finance Summary</p>
        <hr className="bombfinancesummary--heading--line"></hr>
        <div className="container">
          <div className="container1">
            <div className="FirstThreeLetters">
              <div className="FirstThreeLetters-text1">
                <p>Current Supply</p>
              </div>
              <div className="FirstThreeLetters-text2">
                <p>Total Supply</p>
              </div>
              <div className="FirstThreeLetters-text3">Price</div>
            </div>
            <hr className="Line-After-FirstThreeLetters1"></hr>
            <div className="FirstDiv">
              <p className="BombElement">$BOMB</p>
              {<p className="BombElement2">{roundAndFormatNumber(bombCirculatingSupply, 2)}</p>}
              {<p className="BombElement3">{roundAndFormatNumber(bombTotalSupply, 2)}</p>}
              <p className="BombElement4">
                ${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}
                <br />
                {bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC
              </p>
            </div>
            <hr className="Line-After-FirstThreeLetters2"></hr>
            <div className="SecondDiv">
              <p className="Bshare">$BSHARE</p>
              {<p className="Bshare2">{roundAndFormatNumber(bShareCirculatingSupply, 2)}</p>}
              {<p className="Bshare3">{roundAndFormatNumber(bShareTotalSupply, 2)}</p>}
              <p className="Bshare4">
                ${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}
                <br />
                {bSharePriceInBNB ? bSharePriceInBNB : '-.----'} BNB
              </p>
            </div>
            <hr className="Line-After-FirstThreeLetters3"></hr>
            <div className="ThirdDiv">
              <p className="Bbond">$BBOND</p>
              {<p className="Bbond2">{roundAndFormatNumber(tBondCirculatingSupply, 2)}</p>}
              {<p className="Bbond3">{roundAndFormatNumber(tBondTotalSupply, 2)} </p>}
              <p className="Bbond4">
                ${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}
                <br />
                {tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC
              </p>
            </div>
          </div>
          <div className="container2">
            <p className="CurrentEpoch">
              Current Epoch
              <br />
              <p className='CurrentEpochText'>{Number(currentEpoch)}</p>
            </p>
            <hr className="Line1"></hr>
            <p className="NextEpochIn">
            <p className='NextEpochInText'><ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" /></p> Next Epoch in
            </p>
            <hr className="Line2"></hr>
            <p className="LiveTwap">Live TWAP:</p>
            <p className='LiveTwapText'>1.17</p>
            <p className="TVL">TVL:</p>
            <p className="TVLText">$5,003,112</p>
            <p className="LastEpoch">Last Epoch TWAP:</p>
            <p className='LastEpochText'>1.17</p>
          </div>
          <div className="container3">
            <div className="eclipse">
              <div className="insideeclipse">
                <p className="insideeclipseText">$10,451 +22%</p>
              </div>
            </div>
            <div>
              <p className="Container3-Bomb">Bomb:17%</p>
              <p className="Container3-Bshare">Bshare:12%</p>
              <p className="Container3-Bbond">Bbond:22%</p>
              <p className="Container3-Bomb-BTCB">Bomb BTCB:17%</p>
              <p className="Container3-Bshare-BNB">Bshare BNB:17%</p>
              <p className="Container3-others">others:17%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BombFinanceSummary;
