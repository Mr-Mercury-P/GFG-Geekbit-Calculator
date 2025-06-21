import "../styles/Result.css";
import DateCard from './DateCard';

const Result = ({ redemptionDate }) => {
  if (!redemptionDate) return null;

  return (
    <div className="result-grid">
      <DateCard title="With Weekly Contest Participation" date={redemptionDate.withContest} />
      <DateCard title="Without Contest Participation" date={redemptionDate.withoutContest} />

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
