import { AppointmentModel } from "@devexpress/dx-react-scheduler";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppAppointmentModel = AppointmentModel & { id: string };

export interface ITimetableState {
  selectedDay: Date | undefined;
  isShowEditForm: boolean;
  appointments: Array<AppAppointmentModel>;
}

const initialState: ITimetableState = {
  selectedDay: new Date(),
  isShowEditForm: false,
  appointments: [],
};

export const timetableReducer = createSlice({
  name: "timetable",
  initialState,
  reducers: {
    setSelectedDay: (state, action: PayloadAction<Date | undefined>) => {
      state.selectedDay = action.payload;
    },
    toggleShowEditForm: (state) => {
      state.isShowEditForm = !state.isShowEditForm;
    },
    updateAppointment: (
      state,
      action: PayloadAction<{ id: string; data: AppointmentModel }>
    ) => {
      const { id, data } = action.payload;
      const foundIndex = state.appointments.findIndex(
        (appointment) => appointment.id === id
      );

      if (foundIndex !== -1) {
        state.appointments[foundIndex] = {
          ...state.appointments[foundIndex],
          ...data,
          id: id.toString(),
        };
      }
    },
    addAppointment: (state, action: PayloadAction<any>) => {
      state.appointments = state.appointments.concat(action.payload);
    },

    deleteAppointment: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== id
      );
    },
  },
});

export const {
  setSelectedDay,
  toggleShowEditForm,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = timetableReducer.actions;

export default timetableReducer.reducer;
