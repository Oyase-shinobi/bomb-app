import bombIcon from '../../../assets/img/bomb32.png';
import bshare from '../../../assets/img/bshares.png';
import bbond from '../../../assets/img/bbond.png';
import metaLogo from '../../../assets/img/wMetaMask.png';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

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
              <TableCell>Maria Anders</TableCell>
              <TableCell>Mexico</TableCell>
              <TableCell>Mexico</TableCell>
              <TableCell>
                <img src={metaLogo} alt="" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src={bshare} alt="" />{' '}
              </TableCell>
              <TableCell>Francisco </TableCell>
              <TableCell>Mexico</TableCell>
              <TableCell>Mexico</TableCell>
              <TableCell>
                <img src={metaLogo} alt="" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src={bbond} alt="" />{' '}
              </TableCell>
              <TableCell>Francisco </TableCell>
              <TableCell>Mexico</TableCell>
              <TableCell>Mexico</TableCell>
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
              <h1 style={{ color: 'white' }}>258</h1>
            </div>
            <div style={{ borderBottom: '1px solid white', padding: '0.5rem 0' }}>
              <h1 style={{ color: 'white' }}>03:38:36</h1>
              <span>Current Epoch</span>
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

export default BombFinanceSummary;