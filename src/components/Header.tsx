import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquare size={24} className="text-white" />
          <h1 className="text-xl font-bold">GREEN-API</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;