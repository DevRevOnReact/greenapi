import React, { useState } from 'react';
import { SendMessageRequest } from '../types/api';

interface SendMessageFormProps {
  onSend: (data: SendMessageRequest) => void;
  disabled: boolean;
}

const SendMessageForm: React.FC<SendMessageFormProps> = ({ onSend, disabled }) => {
  const [chatId, setChatId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend({ chatId, message });
    setChatId('');
    setMessage('');
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3">Отправить сообщение</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Номер телефона
          </label>
          <div className="flex">
            <input
              type="text"
              id="phoneNumber"
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Номер телефона (например, 79001234567)"
              disabled={disabled}
              required
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Формат: код страны + номер телефона без знака "+" (например, 79001234567)</p>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Ваше сообщение
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Введите свое сообщение"
            rows={3}
            disabled={disabled}
            required
          ></textarea>
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

export default SendMessageForm;