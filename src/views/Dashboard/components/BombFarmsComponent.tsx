import React, { useState } from 'react';
import useWallet from 'use-wallet';
import WalletProviderModal from '../../../components/WalletProviderModal';
import useBank from '../../../hooks/useBank';
import useRedeem from '../../../hooks/useRedeem';
import useStatsForPool from '../../../hooks/useStatsForPool';

const BombFarmComponent = () => {

  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const bankId2='BshareBnbLPBShareRewardPool';
  const bankId1 ='BombBtcbLPBShareRewardPool';
  const bank1 = useBank(bankId1);
  const bank2 = useBank(bankId2);
  const { account } = useWallet();
  const { onRedeem } = useRedeem(bank1);
  let statsOnPool1 = useStatsForPool(bank1);
  let statsOnPool2 = useStatsForPool(bank2);



  return (
    <>
      <div className="BombFarmStartingDiv">
        <p className="BombFarmsText">Bomb Farms</p>
        <div className="DivBelowFarms">
          <p className="TextBelowBombFarms">Stake your LP tokens in our farms to start earning $BSHARE</p>
        </div>
        <div className="BombFarmStartingInvestnowAndLatestNewsFirstDiv">
          <div className="BombFarmStartingBelowDescordAndRead">
            <div className="BombFarmStartingBoardroomBox">
              <p className="BombFarmStartingBoardroomText">BOMB-BTCB</p>
            </div>
            <div className="BombFarmStartingRecommentBox">
              <p className="BombFarmStartingRecommentBoxText">Recommend</p>
            </div>
            <p className="BombFarmStartingTVLprice">TVL:${statsOnPool1?.TVL}</p>
          </div>
          <hr className="BombFarmStartingLineAfetrBoardroom"></hr>
          <div className="BombFarmStartingLastDivBoardroomBox">
            <p className="BombFarmStartingDailyReturnDiv">
              Daily Returns:
              <br />
              {bank1.closedForStaking ? '0.00' : statsOnPool1?.dailyAPR}%
            </p>
            <p className="BombFarmStartingYourStakeDiv">
              Your Stake: <br />
              6.0000
              <br />
              =$656747
            </p>
            <p className="BombFarmStartingEarnedDiv">
              Earned: <br />
              16.09000
              <br />
              =$29589
            </p>
          </div>
          <div className="BombFarmStartingDepositAndWithdrawDivBoardroom">
            {!!account ?(
                <a className="BombFarmDeopsitButton" href="/farm/BombBtcbLPBShareRewardPool">
                  <p className="BombFarmDeopsitButtonText">Deposit</p>
                </a>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="BombFarmDeopsitButton">
                      <p className="BombFarmDeopsitButtonText">Deposit</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}
            {!!account ?(
            <button onClick={onRedeem}>
              <div className="BombFarmWithdrawButton">
                <p className="BombFarmWithdrawButtonText">Withdraw</p>
              </div>
            </button>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="BombFarmWithdrawButton">
                      <p className="BombFarmWithdrawButtonText">Withdraw</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}
            {!!account ?(
            <button onClick={onRedeem}>
              <div className="BombFarmClaimButton">
                <p className="BombFarmClaimButtonText">Claim Rewards</p>
              </div>
            </button>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="BombFarmClaimButton">
                      <p className="BombFarmClaimButtonText">Claim Rewards</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}                               
          </div>
        </div>
        <div className="BombFarmStartingInvestnowAndLatestNewsFirstDiv">
          <div className="BombFarmStartingBelowDescordAndReadSecondDiv">
            <div className="BombFarmStartingBoardroomBoxSecondDiv">
              <p className="BombFarmStartingBoardroomTextSecondDiv">BSHARE-BNB</p>
            </div>
            <div className="BombFarmStartingRecommentBoxSecondDiv">
              <p className="BombFarmStartingRecommentBoxTextSecondDiv">Recommend</p>
            </div>
            <p className="BombFarmStartingTVLpriceSecondDiv">TVL:${statsOnPool2?.TVL}</p>
          </div>
          <hr className="BombFarmStartingLineAfetrBoardroomSecondDiv"></hr>
          <div className="BombFarmStartingLastDivBoardroomBoxSecondDiv">
            <p className="BombFarmStartingDailyReturnDivSeocndDiv">
              Daily Returns:
              <br />
            {bank2.closedForStaking ? '0.00' : statsOnPool2?.dailyAPR}%
            </p>
            <p className="BombFarmStartingYourStakeDivSecondDiv">
              Your Stake: <br />
              6.0000
              <br />
              =$656747
            </p>
            <p className="BombFarmStartingEarnedDivSecondDiv">
              Earned: <br />
              16.09000
              <br />
              =$29589
            </p>
          </div>
          <div className="BombFarmStartingDepositAndWithdrawDivBoardroomSecondDiv">
            {!!account ?(
              <a className="BombFarmDeopsitButtonSecondDiv" href="/farm/BshareBnbLPBShareRewardPool">
                <p className="BombFarmDeopsitButtonTextSeconDiv">Deposit</p>
              </a>
              ) : (
                <button onClick={handleWalletProviderOpen} className="BombFarmDeopsitButtonSecondDiv">
                    <p className="BombFarmDeopsitButtonTextSeconDiv">Deposit</p>
                  <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                </button>
              )}
            {!!account ?(
            <button onClick={onRedeem}>
              <div className="BombFarmWithdrawButtonSecondDiv">
                 <p className="BombFarmWithdrawButtonTextSecondDiv">Withdraw</p>
              </div>
            </button>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="BombFarmWithdrawButtonSecondDiv">
                      <p className="BombFarmWithdrawButtonTextSecondDiv">Withdraw</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}
            {!!account ?(
            <button onClick={onRedeem}>
              <div className="BombFarmClaimButtonSecondDiv">
                 <p className="BombFarmClaimButtonTextSecondDiv">Claim Rewards</p>
              </div>
            </button>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="BombFarmClaimButtonSecondDiv">
                      <p className="BombFarmClaimButtonTextSecondDiv">Claim Rewards</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}                                 
          </div>
        </div>
      </div>
    </>
  );
};

export default BombFarmComponent;
