import React from "react";
import PropTypes from "prop-types";
import { styled } from "../stitches.config";

const ButtonStyled = styled("div", {
  fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontWeight: 700,
  border: 0,
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: "1",
  fontSize: 20,
  padding: "15px 30px",
  marginTop: "100px",
  variants: {
    primary: {
      true: {
        color: "$pri12",
        backgroundColor: "$pri7",
      },
      false: {
        color: "$pri12",
        backgroundColor: "$none",
        boxShadow: "$gs6 0px 0px 0px 1px inset",
      },
    },
  }
});

type ButtonProps = {
  label: string;
  primary?: boolean;
  onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{label}</ButtonStyled>;
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};
