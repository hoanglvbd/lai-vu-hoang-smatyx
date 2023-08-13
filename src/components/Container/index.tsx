import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface IContainerProps extends PropsWithChildren {}

const Container = (props: IContainerProps) => {
  return <Box px="24px">{props.children}</Box>;
};

export default Container;
