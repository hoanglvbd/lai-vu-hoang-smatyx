"use client";

import { SyntheticEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <Box>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        width={"420px"}
        mx="auto"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        height={"100vh"}
      >
        <Box my="24px">
          <Typography variant="h4" textAlign="center">
            Login
          </Typography>
        </Box>
        <form onSubmit={onSubmit}>
          <Box mb={"16px"}>
            <TextField label="Username" fullWidth size="small" />
          </Box>
          <Box>
            <TextField label="Password" fullWidth size="small" />
          </Box>

          <Box my={"16px"}>
            <Typography variant="body2">Forgot Password?</Typography>
          </Box>
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </form>
      </Box>
      <Box
        position={"absolute"}
        bottom={0}
        right={0}
        left={0}
        textAlign="center"
        py={"30px"}
      >
        <Typography variant="body2">Copyright © 2023 Lai Vu Hoang</Typography>
      </Box>
    </Box>
  );
};

export default Login;
