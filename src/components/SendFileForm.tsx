import React, { useState } from 'react';
import { SendFileRequest } from '../types/api';

interface SendFileFormProps {
  onSend: (data: SendFileRequest) => void;
  disabled: boolean;
}

const SendFileForm: React.FC<SendFileFormProps> = ({ onSend, disabled }) => {
  const [chatId, setChatId] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend({ chatId, fileUrl, fileName });
    setChatId('');
    setFileUrl('');
    setFileName('');
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3">Отправить файл по URL</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="filePhoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Номер телефона
          </label>
          <div className="flex">
            <input
              type="text"
              id="filePhoneNumber"
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Phone number (e.g. 79001234567)"
              disabled={disabled}
              required
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Формат: код страны + номер телефона без знака "+" (например, 79001234567)</p>
        </div>
        
        <div>
          <label htmlFor="fileUrl" className="block text-sm font-medium text-gray-700 mb-1">
            URL Файл
          </label>
          <input
            type="url"
            id="fileUrl"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="https://example.com/file.pdf"
            disabled={disabled}
            required
          />
        </div>
        
        <div>
          <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
           Имя файла
          </label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="document.pdf"
            disabled={disabled}
          />
        </div>
        
        <button
          type="submit"
          disabled={disabled}
          className={`w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default SendFileForm;