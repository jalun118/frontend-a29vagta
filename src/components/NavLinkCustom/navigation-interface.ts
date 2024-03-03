import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface iButtonLink extends ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  className: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
}
