import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSelectedDay } from "@/store/timetable";
import { Moment } from "moment";
import { Input } from "@mui/material";

const DatePicker = () => {
  const selectedDay =
    useAppSelector((state) => state.timetable.selectedDay) || new Date();

  const dispatch = useAppDispatch();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker
        value={selectedDay}
        components={{
          ActionBar: () => null,
        }}
        onChange={(value: Moment | null) =>
          dispatch(setSelectedDay(value ? value.toDate() : undefined))
        }
        renderInput={() => <Input />}
        showToolbar={false}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
