import bombShare2 from '../../../assets/img/bshares2.png';
import bombShare3 from '../../../assets/img/bshare3.png';
import bombShare from '../../../assets/img/bshares.png';
import discordIcon from '../../../assets/img/discord.png';
import docIcon from '../../../assets/img/doc.png';
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

export default Investment;
