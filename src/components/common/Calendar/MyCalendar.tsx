import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, DateRangeProps, Range } from "react-date-range";
import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const DIRECTION_BREAKPOINT = 800;

type MyCalendarProps = Omit<DateRangeProps, "onChange"> & {
  onChange?: (item: Range) => void;
};

const MyCalendar = ({ onChange, ...restProps }: MyCalendarProps) => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);
  const { width } = useWindowSize();

  return (
    <DateRange
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={width < DIRECTION_BREAKPOINT ? 1 : 2}
      direction={"horizontal"}
      {...restProps}
      onChange={(item) => {
        setState([item.selection]);
        onChange && onChange(item.selection);
      }}
    />
  );
};

export default MyCalendar;
