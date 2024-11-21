import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/style/AboutMutualFunds.css';

const AboutMutualFunds = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/mutual-funds');
  };

  const handleLearnMore = () => {
    // Replace with the actual URL you want to redirect to
    window.open('https://www.mutualfundssahihai.com/en', '_blank');
  };

  return (
    <div className="about-mutual-funds-container">
      <h1>About Mutual Funds</h1>
      <p>
      Understanding Mutual <br />
      
       A Comprehensive Guide
What Are Mutual Funds?
Mutual funds are collective investment schemes that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. This allows individual investors to participate in a professionally managed investment without needing to manage the investments directly.

How Mutual Funds Work
When you invest in a mutual fund, you buy shares in the fund. The money pooled from all investors is then used by professional fund managers to buy securities according to the fund’s investment objective. The performance of the fund is determined by the performance of the underlying securities.

Types of Mutual Funds
Equity Funds

Description: Invest primarily in stocks and aim for long-term growth.
Risk Level: High.
Returns: Historically, equity funds have the potential for high returns, typically around 10-15% annually.
Examples: Large Cap, Mid Cap, Small Cap, Sectoral Funds, Index Funds.
Debt Funds

Description: Invest in fixed-income securities like government and corporate bonds.
Risk Level: Moderate to Low.
Returns: Generally provide returns between 6-10% annually.
Examples: Government Bond Funds, Corporate Bond Funds, Liquid Funds.
Hybrid Funds

Description: Combine equity and debt investments to balance risk and returns.
Risk Level: Moderate.
Returns: Typically around 8-12% annually.
Examples: Balanced Funds, Dynamic Asset Allocation Funds.
Money Market Funds

Description: Invest in short-term debt instruments like treasury bills and commercial paper.
Risk Level: Very Low.
Returns: Usually provide returns around 4-6%.
Liquidity: High, with minimal risk.
International Funds

Description: Invest in foreign markets, providing global exposure.
Risk Level: Variable, depending on the market conditions.
Returns: Potentially high returns, influenced by international market performance.
Risks and Returns of Mutual Funds
Risks
Market Risk: The value of equity funds can fluctuate based on market conditions, leading to potential losses.
Credit Risk: Debt funds face the risk of default by issuers of the securities they hold, which can impact returns.
Interest Rate Risk: Rising interest rates can negatively affect bond prices, impacting debt fund returns.
Liquidity Risk: Some funds may have restrictions on when you can sell your shares, which can affect your ability to access cash.
Inflation Risk: The real returns on your investments can be eroded by inflation, particularly in low-yield environments.
Returns
Equity Funds: Historically higher potential returns (10-15% annually) but with increased risk and volatility.
Debt Funds: Generally lower but steadier returns (6-10% annually), suitable for conservative investors.
Hybrid Funds: Moderate returns (8-12% annually), balancing risk and reward.
Money Market Funds: Low returns (4-6%), ideal for short-term investment needs and capital preservation.
How to Invest in Mutual Funds
Identify Your Investment Goals

Determine your financial goals, risk tolerance, and investment horizon. This will help you choose the right type of mutual funds.
Research Mutual Funds

Look for mutual funds that align with your investment goals. Consider factors such as past performance, expense ratios, and fund manager reputation.
Choose a Fund House or Investment Platform

You can invest directly through mutual fund companies or via third-party platforms (like online brokers). Evaluate the platform’s fees, ease of use, and available funds.
Complete the KYC Process

Know Your Customer (KYC) compliance is required before investing. Provide necessary documentation (identity proof, address proof, etc.) to verify your identity.
Select Your Investment Type

Decide between a lump sum investment (one-time payment) or a Systematic Investment Plan (SIP), where you invest a fixed amount regularly (monthly or quarterly).
Monitor Your Investment

Regularly review your mutual fund’s performance. Make adjustments if necessary to ensure alignment with your financial goals.
Redemption

If you decide to withdraw your investment, follow the fund’s redemption process. Be aware of any exit loads or taxes applicable to the redemption.
Conclusion
Investing in mutual funds can be a rewarding way to grow your wealth over time, offering diversification, professional management, and varying risk profiles to suit different investors. Understanding the types of mutual funds, their risks, returns, and how to invest is crucial for making informed financial decisions.

By educating yourself and taking a disciplined approach to investing, you can navigate the mutual fund landscape effectively and work towards achieving your financial goal
      </p>
      <p>
        Investing in mutual funds can provide a great way to grow your wealth over time. 
        However, it's essential to understand the risks and returns associated with different types of funds.
      </p>
      <button onClick={handleBack} className="back-button">Back to Mutual Funds</button>
      <button onClick={handleLearnMore} className="learn-more-button">Learn More About Investing</button>
    </div>
  );
};

export default AboutMutualFunds;
