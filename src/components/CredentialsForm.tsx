import React, { useState } from 'react';
import { ApiCredentials } from '../types/api';

interface CredentialsFormProps {
  onSave: (credentials: ApiCredentials) => void;
  credentials: ApiCredentials;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ onSave, credentials }) => {
  const [idInstance, setIdInstance] = useState(credentials.idInstance);
  const [apiTokenInstance, setApiTokenInstance] = useState(credentials.apiTokenInstance);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ idInstance, apiTokenInstance });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Подключение GREEN-API</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="idInstance" className="block text-sm font-medium text-gray-700 mb-1">
            ID Instance
          </label>
          <input
            type="text"
            id="idInstance"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Введите свой ID Instance"
            required
          />
        </div>
        
        <div>
          <label htmlFor="apiTokenInstance" className="block text-sm font-medium text-gray-700 mb-1">
            API Token Instance
          </label>
          <input
            type="text"
            id="apiTokenInstance"
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Введите свой API Token Instance"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default CredentialsForm;