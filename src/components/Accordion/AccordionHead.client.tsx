"use client";

import { type PropsWithChildren, useContext } from "react";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";

import { AccordionContext } from "./context.client";

export interface AccordionHeadProps extends PropsWithChildren {
  classes?: {
    container?: string;
    title?: string;
    icon?: string;
  };
}

export default function AccordionHead({
  classes,
  children,
}: AccordionHeadProps) {
  const { isOpen, disabled, duration, toggle } = useContext(AccordionContext);

  const onClick = () => {
    toggle();
  };

  return (
    <button
      className={clsx("broccoli-ui-accordion-head", classes?.container)}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={clsx("broccoli-ui-accordion-head-title", classes?.title)}>
        {children}
      </div>
      <IoIosArrowDown
        style={{ transitionDuration: `${duration}ms` }}
        className={clsx(
          "broccoli-ui-accordion-head-icon",
          {
            "broccoli-ui-accordion-head-icon--closed": !isOpen,
            "broccoli-ui-accordion-head-icon--opened": isOpen,
          },
          classes?.icon,
        )}
      />
    </button>
  );
}
