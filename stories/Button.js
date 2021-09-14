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
  variants: {
    primary: {
      true: {
        color: "$gs1",
        backgroundColor: "$pri",
      },
      false: {
        color: "$gs6",
        backgroundColor: "$none",
        boxShadow: "$gs6 0px 0px 0px 1px inset",
      },
    },
    size: {
      small: {
        fontSize: "12px",
        padding: "10px 16px",
      },
      medium: {
        fontSize: "14px",
        padding: "11px 20px",
      },
      large: {
        fontSize: "16px",
        padding: "12px 24px",
      },
    },
  },
  defaultVariants: {
    size: "small",
    variant: "primary",
  },
});

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => {
  return <ButtonStyled {...props}>{label}</ButtonStyled>;
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
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
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
