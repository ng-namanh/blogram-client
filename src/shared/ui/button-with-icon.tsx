import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./button";

interface ButtonWithIconProps {
  icon: JSX.Element;
  text: string;
  to: string;
  className?: string;
}

const NavItem: React.FC<ButtonWithIconProps> = ({
  icon,
  text,
  to,
  className,
}) => {
  return (
    <Link
      to={to}
      className={
        cn(
          "inline-flex w-full items-start justify-start rounded-md py-2 text-sm font-medium text-white shadow-sm ",
        ) + className
      }
    >
      <Button
        variant="link"
        size="sm"
        className=" w-full items-center justify-start gap-2 py-6 text-base text-primary"
      >
        {icon}
        {text}
      </Button>
    </Link>
  );
};

export default NavItem;
