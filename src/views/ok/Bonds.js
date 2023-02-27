import bombShare2 from '../../../assets/img/bshares2.png';
import bombShare3 from '../../../assets/img/bshare3.png';
import bbond from '../../../assets/img/bbond.png';
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
                      <Grid style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
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

export default Bonds;
