import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

import useConversation from "./useConversation";

const ROUTES = {
  CONVERSATIONS: "/conversations",
  USERS: "/users",
  LOGOUT: "#",
};

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: ROUTES.CONVERSATIONS,
        icon: HiChat,
        active: pathname === ROUTES.CONVERSATIONS || !!conversationId,
      },
      {
        label: "Users",
        href: ROUTES.USERS,
        icon: HiUsers,
        active: pathname === ROUTES.USERS,
      },
      {
        label: "Logout",
        href: ROUTES.LOGOUT,
        icon: HiArrowLeftOnRectangle,
        onClick: () => signOut(),
      },
    ],
    [conversationId, pathname]
  );

  return routes;
};

export default useRoutes;
