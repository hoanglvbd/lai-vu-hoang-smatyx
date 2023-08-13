"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";

import Container from "@/components/Container";
import DatePicker from "@/components/DatePicker";
import { useAppDispatch } from "@/hooks";
import { toggleShowEditForm } from "@/store/timetable";
import Calendar from "@/components/Calendar";

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box width={150} flexShrink={0} height={65}>
            <Typography variant="h4" color={blue[800]} lineHeight={"65px"}>
              Calendar
            </Typography>
          </Box>
          <Button
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => dispatch(toggleShowEditForm())}
          >
            Add event
          </Button>
          <Box ml={"-24px"}>
            <DatePicker />
          </Box>
        </Box>
        <Calendar />
      </Box>
    </Container>
  );
}
