import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import Calendar from './Calendar';

describe('Calendar component', () => {
  it('renders the correct month and year', () => {
    const { getByText } = render(<Calendar date={new Date(2023, 8, 21)} />); // September 21, 2023
    expect(getByText('September 2023')).toBeInTheDocument();
  });

  it('renders the correct days of the week', () => {
    const { getByText } = render(<Calendar date={new Date(2023, 8, 21)} />); // September 21, 2023
    expect(getByText('Su')).toBeInTheDocument();
    expect(getByText('Mo')).toBeInTheDocument();
    expect(getByText('Tu')).toBeInTheDocument();
    expect(getByText('We')).toBeInTheDocument();
    expect(getByText('Th')).toBeInTheDocument();
    expect(getByText('Fr')).toBeInTheDocument();
    expect(getByText('Sa')).toBeInTheDocument();
  });

  it('renders the correct number of days for the month', () => {
    const { container } = render(<Calendar date={new Date(2023, 8, 21)} />);
    const dayElements = container.getElementsByClassName('calendar-day'); // Use getElementsByClassName
    // September 2023 has 30 days
    expect(dayElements.length).toBe(30);
  });

  it('highlights the correct day', () => {
    const { getByText } = render(<Calendar date={new Date(2023, 8, 21)} />); // September 21, 2023
    const currentDayElement = getByText('21');
    expect(currentDayElement).toHaveClass('highlighted');
  });
});
