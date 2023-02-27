import Page from '../../components/Page';
import HomeImage from '../../assets/img/background.jpg';
import bombIcon from '../../assets/img/bomb32.png';
import bshare from '../../assets/img/bshares.png';
import bbond from '../../assets/img/bbond.png';
import metaLogo from '../../assets/img/wMetaMask.png';
import Label from '../../components/Label';
import { createGlobalStyle } from 'styled-components';
import bombShare2 from '../../assets/img/bshares2.png';
import bombShare3 from '../../assets/img/bshare3.png';
import bombShare from '../../assets/img/bshares.png';
import discordIcon from '../../assets/img/discord.png';
import docIcon from '../../assets/img/doc.png';
import React, { useMemo, useState } from 'react';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useBombStats from '../../hooks/useBombStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
// import { Bomb as bombTesting } from '../../bomb-finance/deployments/deployments.testing.json';
//import { Bomb as bombProd } from '../../bomb-finance/deployments/deployments.mainnet.json';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import ZapModal from '../Bank/components/ZapModal';
import { Alert } from '@material-ui/lab';
import moment from 'moment';
import { IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import { makeStyles } from '@material-ui/core/styles';
import useBombFinance from '../../hooks/useBombFinance';
//import { ReactComponent as IconTelegram } from '../../assets/img/telegram.svg';
import { Helmet } from 'react-helmet';
import BombImage from '../../assets/img/bomb.png';
import  '../Boardroom';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';

// import Button from '../../components/Button';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { borderRadius, display, fontSize } from '@material-ui/system';
const Dashboard = () => {
  const currentEpoch = useCurrentEpoch();

  const TITLE = 'bomb.money | BTC pegged algocoin';

  // const BackgroundImage = createGlobalStyle`
  //   body {
  //     background-color: grey;
  //     background-size: cover !important;
  //   }
  // `;

  const useStyles = makeStyles((theme) => ({
    button: {
      [theme.breakpoints.down('415')]: {
        // marginTop: '10px'
      },
    },
  }));

  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const bombFtmLpStats = useLpStatsBTC('BOMB-BTCB-LP');
  const bShareFtmLpStats = useLpStats('BSHARE-BNB-LP');
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();
  // const bombmaxi = useBombMaxiStats('0xd6f52e8ab206e59a1e13b3d6c5b7f31e90ef46ef000200000000000000000028');

  // console.log(bombmaxi);
  // let bomb;
  // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  //   bomb = bombTesting;
  // } else {
  //   bomb = bombProd;
  // }

  const buyBombAddress = //'https://app.1inch.io/#/56/swap/BTCB/BOMB';
    //  'https://pancakeswap.finance/swap?inputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&outputCurrency=' +
    'https://app.bogged.finance/bsc/swap?tokenIn=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&tokenOut=0x522348779DCb2911539e76A1042aA922F9C47Ee3';
  //https://pancakeswap.finance/swap?outputCurrency=0x531780FAcE85306877D7e1F05d713D1B50a37F7A';
  const buyBShareAddress = //'https://app.1inch.io/#/56/swap/BNB/BSHARE';
    'https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x531780FAcE85306877D7e1F05d713D1B50a37F7A';
  const buyBusmAddress =
    'https://app.bogged.finance/bsc/swap?tokenIn=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&tokenOut=0x6216B17f696B14701E17BCB24Ec14430261Be94A';
  const bombLPStats = useMemo(() => (bombFtmLpStats ? bombFtmLpStats : null), [bombFtmLpStats]);
  const bshareLPStats = useMemo(() => (bShareFtmLpStats ? bShareFtmLpStats : null), [bShareFtmLpStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const bombLpZap = useZap({ depositTokenName: 'BOMB-BTCB-LP' });
  const bshareLpZap = useZap({ depositTokenName: 'BSHARE-BNB-LP' });

  const [onPresentBombZap, onDissmissBombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBombZap();
      }}
      tokenName={'BOMB-BTCB-LP'}
    />,
  );

  const [onPresentBshareZap, onDissmissBshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBshareZap();
      }}
      tokenName={'BSHARE-BNB-LP'}
    />,
  );

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const ButtonSm = ({ imgsrc, label }) => {
    return (
      <button
        style={{
          background: '#00ADE8',
          borderRadius: '10px',
          padding: '2px 10px',
          maxWidth: '10rem',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '5px',
          marginTop: '10px',
        }}
      >
        {label}
        <img src={imgsrc} alt="" />
      </button>
    );
  };

  const Investment = () => {
    return (
      <Grid container style={{ padding: '1rem 0' }}>
        <Grid item>
          <div>
            <Button
              style={{
                backgroundColor: '#00ADE8',
                padding: '2px 15rem',
                border: '1px solid red',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'white',
              }}
              className=""
            >
              Invest Now
            </Button>
          </div>
          <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              style={{
                backgroundColor: 'grey',
                padding: '2px 4rem',
                border: '1px solid red',
                marginTop: '1rem',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'white',
              }}
            >
              <img src={discordIcon} alt="" />
              Chat on Discord
            </Button>

            <Button
              style={{
                backgroundColor: 'grey',
                padding: '2px 4rem',
                border: '1px solid red',
                fontWeight: 'bold',
                marginTop: '1rem',
                fontSize: '1.2rem',
                color: 'white',
              }}
            >
              <div style={{ background: 'white', borderRadius: '100%', height: '1.5rem', width: '1.5rem' }}>
                <img src={docIcon} alt="" />
              </div>
              Read Docs
            </Button>
          </Grid>
          {/* Boardroom card */}

          <Grid item>
            <Card style={{ marginTop: '1rem' }} variant="outlined">
              <CardContent>
                <Box>
                  <Grid item>
                    <Grid style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img src={bombShare2} alt="" />
                      <h3 style={{ color: 'white' }}>Boardrooms</h3>
                      <div style={{ background: 'green', padding: '0 4px', fontSize: '0.8rem' }}>Recommended</div>
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0.6rem 0',
                        borderBottom: '0.5px solid white',
                        paddingBottom: '0.7rem',
                      }}
                    >
                      <div style={{ width: '20rem', fontSize: '0.9rem' }}>Lorem ipsum, dolor sit amet O</div>
                      <div style={{ fontSize: '0.9rem' }}>TVL: </div>
                    </Grid>
                    <Grid style={{ display: 'flex', gap: '5px', justifyContent: 'flex-end', alignItems: 'center' }}>
                      Total Staked: <img src={bombShare3} alt="" />
                      <span>7732</span>
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '1rem 0',
                      }}
                    >
                      <Grid item>
                        <div>Daily Returns:</div>
                        <div>2%</div>
                      </Grid>
                      <Grid item>
                        <div>Your Stake:</div>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <img src={bombShare3} alt="" />
                          <div>6.000</div>
                        </Grid>
                        <div>~ $1120</div>
                      </Grid>
                      <Grid item>
                        <div>Your Stake:</div>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <img src={bombShare3} alt="" />
                          <div>6.000</div>
                        </Grid>
                        <div>~ $1120</div>
                      </Grid>
                      <Grid item>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <button
                            style={{
                              background: '#00ADE8',
                              borderRadius: '10px',
                              padding: '2px 10px',
                              display: 'flex',
                            }}
                          >
                            Deposit
                          </button>
                          <button
                            style={{
                              background: '#00ADE8',
                              borderRadius: '10px',
                              padding: '2px 10px',
                              display: 'flex',
                            }}
                          >
                            Withdraw
                          </button>
                        </Grid>
                        <button
                          style={{
                            background: '#00ADE8',
                            borderRadius: '10px',
                            padding: '2px 10px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: '5px',
                            marginTop: '10px',
                          }}
                        >
                          Claim Rewards
                          <img src={bombShare3} alt="" />
                        </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const BombFinanceSummary = () => {
    return (
      <Paper style={{ opacity: '0.75' }}>
        <Box p={4} style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '20px', color: 'white', borderBottom: '1px solid white', padding: '0 1rem' }}>
            Bomb Finance Summary
          </span>
        </Box>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'space-between',
            gap: '20rem',
            padding: '0 2rem',
          }}
        >
          <Grid style={{ padding: '0 2rem' }}>
            <Table>
              <TableRow>
                <TableCell></TableCell>
                <TableCell style={{ fontSize: '10px', color: 'white' }}>Current Supply</TableCell>
                <TableCell style={{ fontSize: '10px', color: 'white' }}>Total Supply</TableCell>
                <TableCell style={{ fontSize: '10px', color: 'white' }}>Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src={bombIcon} alt="" />{' '}
                </TableCell>
                <TableCell>{roundAndFormatNumber(bombTotalSupply, 2)}</TableCell>
                <TableCell>{roundAndFormatNumber(bombCirculatingSupply, 2)}</TableCell>
                <TableCell>{bombPriceInBNB} BNB</TableCell>
                <TableCell>
                  <img src={metaLogo} alt="" onClick={() => {
                  bombFinance.watchAssetInMetamask('BOMB');
                }}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src={bshare} alt="" />{' '}
                </TableCell>
                <TableCell>{roundAndFormatNumber(bShareCirculatingSupply, 2)}</TableCell>
                <TableCell>{roundAndFormatNumber(bShareTotalSupply, 2)}</TableCell>
                <TableCell>{bSharePriceInDollars} BNB</TableCell>
                <TableCell>
                  <img src={metaLogo} alt="" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src={bbond} alt="" />{' '}
                </TableCell>
                <TableCell>{roundAndFormatNumber(tBondCirculatingSupply, 2)}</TableCell>
                <TableCell>{roundAndFormatNumber(tBondTotalSupply, 2)}</TableCell>
                <TableCell>{tBondPriceInBNB} BNB</TableCell>
                <TableCell>
                  <img src={metaLogo} alt="" />
                </TableCell>
              </TableRow>
            </Table>
          </Grid>

          <Grid item>
            <Box p={4} style={{ textAlign: 'center', maxWidth: '20rem' }}>
              <div style={{ borderBottom: '1px solid white', padding: '0.5rem 0' }}>
                <span>Current Epoch</span>
                <h1 style={{ color: 'white' }}>{currentEpoch}</h1>
              </div>
              <div style={{ borderBottom: '1px solid white', padding: '0.5rem 0' }}>
                <h1 style={{ color: 'white' }}>{moment().toDate()}</h1>
                <span>Next Epoch In</span>
              </div>
              <div style={{ padding: '0.5rem 0' }}>
                <div>Live TWAP: </div>
                <div>TVL:</div>
                <div>Last Epoch TWAP</div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  const BondFarms = () => {
    return (
      <Grid container style={{ padding: '1rem 0' }}>
        <Grid item>
          {/* Bondfarm card */}

          <Grid item style={{ width: '77rem' }}>
            <Card style={{ marginTop: '1rem' }} variant="outlined">
              <CardContent>
                <Box>
                  <Grid item>
                    <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Grid style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <h3 style={{ color: 'white' }}>Bomb Farms</h3>
                      </Grid>
                      <ButtonSm label="Claim All" imgsrc={bombShare3} />
                    </Grid>

                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '0.5px solid white',
                        borderTop: '0.5px solid white',
                        margin: '1rem 0',
                        padding: '0.5rem 0',
                      }}
                    >
                      <Grid style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={bombShare2} alt="" />
                        <h3 style={{ color: 'white' }}>Boardrooms</h3>
                        <div style={{ background: 'green', padding: '0 4px', fontSize: '0.8rem' }}>Recommended</div>
                      </Grid>
                      <div style={{ fontSize: '0.9rem' }}>TVL: </div>
                    </Grid>
                    <Grid style={{ display: 'flex', gap: '5px', justifyContent: 'flex-end', alignItems: 'center' }}>
                      Total Staked: <img src={bombShare3} alt="" />
                      <span>7732</span>
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '1rem 0',
                      }}
                    >
                      <Grid item>
                        <div>Daily Returns:</div>
                        <div>2%</div>
                      </Grid>
                      <Grid item>
                        <div>Your Stake:</div>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <img src={bombShare3} alt="" />
                          <div>6.000</div>
                        </Grid>
                        <div>~ $1120</div>
                      </Grid>
                      <Grid item>
                        <div>Your Stake:</div>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <img src={bombShare3} alt="" />
                          <div>6.000</div>
                        </Grid>
                        <div>~ $1120</div>
                      </Grid>
                      <Grid item>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <ButtonSm label="Deposit" imgsrc={bombShare3} />
                          <ButtonSm label="Withdraw" imgsrc={bombShare3} />
                          <ButtonSm label="Claim Rewards" imgsrc={bombShare3} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '0.5px solid white',
                        borderTop: '0.5px solid white',
                        margin: '1rem 0',
                        padding: '0.5rem 0',
                      }}
                    >
                      <Grid style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={bombShare2} alt="" />
                        <h3 style={{ color: 'white' }}>Boardrooms</h3>
                        <div style={{ background: 'green', padding: '0 4px', fontSize: '0.8rem' }}>Recommended</div>
                      </Grid>
                      <div style={{ fontSize: '0.9rem' }}>TVL: </div>
                    </Grid>
                    <Grid style={{ display: 'flex', gap: '5px', justifyContent: 'flex-end', alignItems: 'center' }}>
                      Total Staked: <img src={bombShare3} alt="" />
                      <span>7732</span>
                    </Grid>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '1rem 0',
                      }}
                    >
                      <Grid item>
                        <div>Daily Returns:</div>
                        <div>2%</div>
                      </Grid>
                      <Grid item>
                        <div>Your Stake:</div>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <img src={bombShare3} alt="" />
                          <div>6.000</div>
                        </Grid>
                        <div>~ $1120</div>
                      </Grid>
                      <Grid item>
                        <div>Your Stake:</div>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <img src={bombShare3} alt="" />
                          <div>6.000</div>
                        </Grid>
                        <div>~ $1120</div>
                      </Grid>
                      <Grid item>
                        <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <ButtonSm label="Deposit" imgsrc={bombShare3} />
                          <ButtonSm label="Withdraw" imgsrc={bombShare3} />
                          <ButtonSm label="Claim Rewards" imgsrc={bombShare3} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const Bonds = () => {
    return (
      <Grid container style={{ padding: '1rem 0' }}>
        <Grid item>
          {/* Bondfarm card */}

          <Grid item style={{ width: '77rem' }}>
            <Card style={{ marginTop: '1rem' }} variant="outlined">
              <CardContent>
                <Box>
                  <Grid item>
                    <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Grid style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={bbond} alt="" />
                        <Grid item>
                          <h3 style={{ color: 'white' }}>Bonds</h3>
                          <span>Lorem ipsum dolor sit amet consectetur a</span>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '1rem',
                      }}
                    >
                      <Grid item>
                        <div>Current price:</div>
                        <div>BBond = 3456789</div>
                      </Grid>
                      <Grid item>
                        <div>Available to redeem:</div>
                        <Grid
                          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <img src={bbond} alt="" />
                          <div style={{ fontSize: '2rem' }}>6.000</div>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8rem' }}>
                          <div style={{ marginTop: '0.8rem', width: '10rem' }}>Purchase BBond</div>
                          <ButtonSm label="Purchase" />
                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8rem' }}>
                          <div style={{ marginTop: '0.8rem', width: '10rem' }}>Redeem BBond</div>
                          <ButtonSm label="Redeem" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
  return (
    <Page>
      <BackgroundImage />
      <BombFinanceSummary />
      <Investment />
      <BondFarms />
      <Bonds />
    </Page>
  );
};

export default Dashboard;
