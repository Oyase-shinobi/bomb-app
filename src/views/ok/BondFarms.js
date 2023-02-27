import bombShare2 from '../../../assets/img/bshares2.png';
import bombShare3 from '../../../assets/img/bshare3.png';
import bombShare from '../../../assets/img/bshares.png';
import discordIcon from '../../../assets/img/discord.png';
import docIcon from '../../../assets/img/doc.png';
import ButtonSm from './ButtonSm';
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

export default BondFarms;
