// utils/calculator.js
export function calculateRedemptionDates(neededCoins) {
  const today = new Date();

  // ---------- Including Contests ----------
  let totalWithContest = 0;
  let streak1 = 0;
  let days1 = 0;

  while (totalWithContest < neededCoins) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + days1);

    const dayOfWeek = currentDate.getDay(); // Sunday = 0

    days1++;
    streak1++;
    totalWithContest += 1;

    if (streak1 % 8 === 0) totalWithContest += 8;
    if (dayOfWeek === 0) totalWithContest += 2;
  }

  const dateWithContest = new Date(today);
  dateWithContest.setDate(today.getDate() + days1);

  // ---------- Excluding Contests ----------
  let totalWithoutContest = 0;
  let streak2 = 0;
  let days2 = 0;

  while (totalWithoutContest < neededCoins) {
    days2++;
    streak2++;
    totalWithoutContest += 1;

    if (streak2 % 8 === 0) totalWithoutContest += 8;
    // No contest bonus
  }

  const dateWithoutContest = new Date(today);
  dateWithoutContest.setDate(today.getDate() + days2);

  return {
    withContest: dateWithContest.toDateString(),
    withoutContest: dateWithoutContest.toDateString(),
  };
}
