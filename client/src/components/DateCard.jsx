import "../styles/DateCard.css";

const DateCard = ({ title, date }) => {
  return (
    <div className="date-card">
      <h3 className="date-card-title">{title}</h3>
      <p className="date-card-text">{date}</p>
    </div>
  );
};

export default DateCard;
