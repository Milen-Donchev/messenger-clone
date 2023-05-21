"use client";

import useActiveChannel from "../hooks/useActiveChannel";

interface ActiveStatusProps {}

const ActiveStatus = (props: ActiveStatusProps) => {
  useActiveChannel();
  return null;
};

export default ActiveStatus;
