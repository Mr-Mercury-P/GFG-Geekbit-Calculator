import "../styles/Result.css";
import DateCard from './DateCard';

const Result = ({ redemptionDate }) => {
  if (!redemptionDate) return null;

  return (
    <div className="result-grid">
      <DateCard title="Weekly Contest Participation (2 bits) and POTD" date={redemptionDate.withContest} />
      <DateCard title="POTD" date={redemptionDate.withoutContest} />

      <div className="result-links">
        <a
          href="https://www.geeksforgeeks.org/reward"
          target="_blank"
          rel="noopener noreferrer"
          className="result-link"
        >
          🎁 Redeem Reward
        </a>
        <a
          href="https://www.geeksforgeeks.org/problem-of-the-day"
          target="_blank"
          rel="noopener noreferrer"
          className="result-link"
        >
          🧠 Earn GeekBits
        </a>
      </div>
    </div>
  );
};

export default Result;
