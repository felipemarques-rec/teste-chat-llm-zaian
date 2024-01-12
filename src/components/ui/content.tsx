import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      {children}
    </div>
  );
};
