"use client";

import useConversation from "../../hooks/useConversation";
import useRoutes from "../../hooks/useRoutes";

import MobileItem from "./MobileItem";

interface MobileFooterProps {}

const MobileFooter = (props: MobileFooterProps) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
      fixed
      justify-between
      w-full
      bottom-0
      z-40
      flex
      items-center
      bg-white
      border-t-[1px]
      lg:hidden
    "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
          active={route.active}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
