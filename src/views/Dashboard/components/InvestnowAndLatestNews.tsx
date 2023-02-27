import React, { useState } from 'react';
import useWallet from 'use-wallet';
import WalletProviderModal from '../../../components/WalletProviderModal';
import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';

const InvestnowAndLatestNews = () => {

  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const { account } = useWallet();

  const { onRedeem } = useRedeemOnBoardroom();

  return (
    <>
      <div className="InvestnowAndLatestNewsFirstDiv">
        <div className="InvestNow">
          <p className="InvestNowText">Invest Now</p>
        </div>
        <div className="BelowInvestNow">
          <div className="ChatOnDescord">
            <p className="ChatOnDescordText">ChatOnDescordText</p>
          </div>
          <div className="ReadDocs">
            <p className="ReadDocsText">Read Docs</p>
          </div>
        </div>
        <div className="BelowDescordAndRead">
          <div className="BoardroomBox">
            <p className="BoardroomText">Boardroom</p>
          </div>
          <div className="RecommentBox">
            <p className="RecommentBoxText">Recommend</p>
          </div>
        </div>
        <p className="TextBelowBoardroom">Stake Bshare and BOMB every Epoch</p>
        <p className="TVLprice">TVL: $23,288,0</p>
        <hr className="LineAfetrBoardroom"></hr>
        <p className="TotalStaked">Total Staked: 7232</p>
        <div className="LastDivBoardroomBox">
          <p className="DailyReturnDiv">
            Daily Returns:
            <br />
            2%
          </p>
          <p className="YourStakeDiv">
            Your Stake: <br />
            6.0000
            <br />
            =$656747
          </p>
          <p className="EarnedDiv">
            Earned: <br />
            16.09000
            <br />
            =$29589
          </p>
        </div>
        <div className="DepositAndWithdrawDivBoardroom">
            {!!account ?(
                <a className="depositButton" href="/boardroom">
                  <p className="depositButtonText">Deposit</p>
                </a>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="depositButton">
                      <p className="depositButtonText">Deposit</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}
            {!!account ?(
            <button onClick={onRedeem}>
              <div className="withdrawButton">
                <p className="withdrawButtonText">Withdraw</p>
              </div>
            </button>
                ) : (
                  <button onClick={handleWalletProviderOpen} className="withdrawButton">
                      <p className="withdrawButtonText">Withdraw</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}              
        </div>
            {!!account ?(
          <button onClick={onRedeem}>
            <div className="claimRewardButton">
              <p className="claimRewardButtonText">Claim Rewards</p>
            </div>
          </button> 
                ) : (
                  <button onClick={handleWalletProviderOpen} className="claimRewardButton">
                      <p className="claimRewardButtonText">Claim Rewards</p>
                      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose}/>
                  </button>
              )}      
        <div className="LatestNewsDiv">
          <p className="LatestNewsText">Latest News</p>
        </div>
      </div>
    </>
  );
};

export default InvestnowAndLatestNews;
