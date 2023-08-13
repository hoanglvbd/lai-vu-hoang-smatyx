import { LoadingButtonProps } from "@mui/lab";
import { Typography } from "@mui/material";
import classNames from "classnames";
import { ReactElement } from "react";

import { LeftIconWrapper, StyledLoadingButton } from "./Button.styled";

interface IButtonProps extends LoadingButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "contained" | "text";
  StartIcon?: ReactElement | null | undefined;
  endIcon?: ReactElement | null | undefined;
  isLoading?: boolean;
  disabled?: boolean;
  children: string;
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  size = "medium",
  variant = "contained",
  isLoading = false,
  fullWidth = false,
  StartIcon = null,
  type = "button",
  disabled,
  children,
  onClick,
  ...rest
}: IButtonProps): ReactElement => {
  return (
    <StyledLoadingButton
      loading={isLoading}
      disabled={disabled}
      className={classNames([size], [variant], {
        isLoading,
        disabled,
        fullWidth,
      })}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {StartIcon != null ? (
        <LeftIconWrapper>{StartIcon}</LeftIconWrapper>
      ) : null}
      <Typography variant="button">{children}</Typography>
    </StyledLoadingButton>
  );
};

export default Button;
