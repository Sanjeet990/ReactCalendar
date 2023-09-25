// Inside Calendar.js
import React from 'react';
import './Calendar.css';

const Calendar = ({ date }) => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const daysArray = [];

  // Create an array of day numbers for the month
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(day);
  }

  // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, etc.)
  const startDayOfWeek = startOfMonth.getDay();

  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
  }

  daysArray.forEach((day) => {
    calendarDays.push(
      <div
        key={`day-${day}`}
        className={`calendar-day ${day === date.getDate() ? 'highlighted' : ''}`}
        data-testid={`calendar-day-${day}`} // Add data-testid for testing
      >
        {day}
      </div>
    );
  });

  return (
    <div className="calendar">
      {/* Header row */}
      <div className="header">
        <span>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
      </div>

      {/* Days of the week row */}
      <div className="weekdays">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>

      {/* Calendar days */}
      <div className="days">{calendarDays}</div>
    </div>
  );
};

export default Calendar;
