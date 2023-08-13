import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
  ChangeSet,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  DayView,
  WeekView,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  ConfirmationDialog,
  AppointmentForm,
  TodayButton,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper } from "@mui/material";

import {
  addAppointment,
  deleteAppointment,
  setSelectedDay,
  toggleShowEditForm,
  updateAppointment,
} from "@/store/timetable";
import { useAppDispatch, useAppSelector } from "@/hooks";

const Calendar = () => {
  const { selectedDay, isShowEditForm, appointments } = useAppSelector(
    (state) => state.timetable
  );

  const dispatch = useAppDispatch();

  const onCommitChanges = (changes: ChangeSet) => {
    if (changes.added) {
      dispatch(
        addAppointment({
          ...changes.added,
          id: uuidv4(),
        })
      );
    }
    if (changes.changed) {
      const id = Object.keys(changes.changed)[0];
      dispatch(
        updateAppointment({
          id,
          data: changes.changed[id],
        })
      );
    }
    if (changes.deleted) {
      const id = changes.deleted as string;
      dispatch(
        deleteAppointment({
          id,
        })
      );
    }
  };

  return (
    <Paper>
      {/* 
      // @ts-ignore */}
      <Scheduler height={window.innerHeight} data={appointments}>
        <ViewState
          currentDate={selectedDay}
          onCurrentDateChange={(currentDate) =>
            dispatch(setSelectedDay(currentDate))
          }
        />
        <EditingState onCommitChanges={onCommitChanges} />
        <IntegratedEditing />
        <DayView />
        <WeekView name="work-week" />
        <MonthView />
        <AllDayPanel />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton showCloseButton />
        <AppointmentForm
          visible={isShowEditForm}
          onVisibilityChange={() => dispatch(toggleShowEditForm())}
        />
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
