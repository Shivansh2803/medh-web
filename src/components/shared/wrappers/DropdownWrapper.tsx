import React, { ReactNode } from "react";

interface DropdownWrapperProps {
  isOpen?: boolean;
  children: ReactNode;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ isOpen, children }) => {
  return (
    <div className="absolute top-full z-medium   translate-y-10 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 ">
      {children}
    </div>
  );
};

export default DropdownWrapper;
