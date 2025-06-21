import { useState } from 'react';
import "../styles/InputForm.css";
import { calculateRedemptionDates } from '../utils/calculator';
import { rewards } from '../utils/rewards';
import Result from './Result';
const InputForm = () => {
  const [currentCoins, setCurrentCoins] = useState('');
  const [selectedReward, setSelectedReward] = useState('');
  const [redemptionDate, setRedemptionDate] = useState(null);

  const handleCoinsChange = (e) => {
    setCurrentCoins(e.target.value);
    setRedemptionDate(null);
  };

  const handleRewardChange = (e) => {
    setSelectedReward(e.target.value);
    setRedemptionDate(null);
  };

  const handleCalculate = () => {
    const reward = rewards.find(r => r.coins === parseInt(selectedReward, 10));
    if (!reward || currentCoins === '') return;

    const needed = reward.coins - parseInt(currentCoins, 10);

    if (needed <= 0) {
      setRedemptionDate({
        withContest: "You can redeem this reward now!",
        withoutContest: "You can redeem this reward now!",
      });
    } else {
      const result = calculateRedemptionDates(needed);
      setRedemptionDate(result);
    }
  };

  return (
    <div className="input-form">
      <div className="form-group">
        <label>Current GeekBits:</label>
        <input
          type="number"
          value={currentCoins}
          onChange={handleCoinsChange}
          placeholder="e.g. 25"
        />
      </div>

      <div className="form-group">
        <label>Select Reward:</label>
        <select value={selectedReward} onChange={handleRewardChange}>
          <option value="">-- Choose a reward --</option>
          {rewards.map((reward, index) => (
            <option key={index} value={reward.coins}>
              {reward.name} — {reward.coins} coins
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      <Result redemptionDate={redemptionDate} />
    </div>
  );
};

export default InputForm;
