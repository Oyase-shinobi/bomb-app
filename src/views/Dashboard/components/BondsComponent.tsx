import React, {useState } from 'react'
import useWallet from 'use-wallet';
import useCatchError from '../../../hooks/useCatchError';
import WalletProviderModal from '../../../components/WalletProviderModal';
import useBombFinance from '../../../hooks/useBombFinance';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import useBondStats from '../../../hooks/useBondStats';

const BondsFunc=()=>{ 

  const bombFinance = useBombFinance();
  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);
  const {
    contracts: {Treasury},
  } = useBombFinance();

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const { account } = useWallet();
  const [approveStatus, approve] = useApprove(bombFinance.BOMB, Treasury.address);
  const [approveStatus1, approve1] = useApprove(bombFinance.BBOND, Treasury.address);
  const catchError = useCatchError();
  const fromTokenName1="BOMB";
  const fromTokenName2="BBONB";
  const bondStat = useBondStats();
    return(
        <>
            <div className='BondsStarting'>
                <p className='BondText'>Bonds</p>
                <p className='TextBelowBondText'>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
                <div className='BondsSecondDivStarting'>
                    <div className='BondsSecondDivStartingFirstDiv'>
                        <p className='BondsSecondDivStartingFirstDivText1'>Current Price: (Bomb)^2</p>
                        <p className='BondsSecondDivStartingFirstDivText2'>Available to redeem:</p>
                        <p className='BondsSecondDivStartingFirstDivText3'>Purchase BBond<br/>Bomb is over peg</p>
                      {!!account ? (
                      <>
                      {approveStatus !== ApprovalState.APPROVED && !false ? (
                       <button
                        className="RedeemButton"
                        disabled={approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN}
                        onClick={() => catchError(approve(), `Unable to approve ${fromTokenName1}`)}
                        >
                        <p className='RedeemButtonText'>Purchase</p>  
                      </button>
                    ) : (
                      <button
                        // className={false ? 'shinyButtonDisabled' : 'shinyButton'}
                        // onClick={onPresent}
                        // disabled={disabled}
                      >
                      {/* {disabledDescription || action} */}
                    </button>
                     )}
                    </>
                      ) : (
                    <button onClick={handleWalletProviderOpen} className="RedeemButton">
                      <p className='RedeemButtonText'>Purchase</p> 
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
                       )}                        
                        <hr className='LineAfterBonds'></hr>
                    </div>
                    <div className='BondsSecondDivStartingSecondDiv'>
                        <p className='BondsSecondDivStartingSecondDivText1'>BBond ={Number(bondStat?.tokenInFtm).toFixed(4) || '-'}</p>
                        <p className='BondsSecondDivStartingSecondDivText2'>456</p>
                        <p className='BondsSecondDivStartingSecondDivText4'>Redeem Bomb</p>
                      {!!account ? (
                      <>
                      {approveStatus1 !== ApprovalState.APPROVED && !false ? (
                       <button
                        className="RedeemButton1"
                        disabled={approveStatus1 === ApprovalState.PENDING || approveStatus1 === ApprovalState.UNKNOWN}
                        onClick={() => catchError(approve1(), `Unable to approve ${fromTokenName2}`)}
                        >
                        <p className='RedeemButtonText1'>Redeem</p> 
                      </button>
                    ) : (
                      <button
                        // className={false ? 'shinyButtonDisabled' : 'shinyButton'}
                        // onClick={onPresent}
                        // disabled={disabled}
                      >
                      {/* {disabledDescription || action} */}
                    </button>
                     )}
                    </>
                      ) : (
                    <button onClick={handleWalletProviderOpen} className="RedeemButton1">
                      <p className='RedeemButtonText1'>Redeem</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
                       )} 
                    </div>
                </div>
            </div>
        </>
    );
}

export default BondsFunc;