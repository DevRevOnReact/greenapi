import { ApiCredentials, ApiResponse, SendFileRequest, SendMessageRequest } from '../types/api';

const BASE_URL = 'https://api.green-api.com';

export const apiService = {
  async getSettings(credentials: ApiCredentials): Promise<ApiResponse> {
    try {
      const { idInstance, apiTokenInstance } = credentials;
      const url = `${BASE_URL}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      return { data, isError: false };
    } catch (error) {
      return { 
        data: null, 
        isError: true, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  },

  async getStateInstance(credentials: ApiCredentials): Promise<ApiResponse> {
    try {
      const { idInstance, apiTokenInstance } = credentials;
      const url = `${BASE_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      return { data, isError: false };
    } catch (error) {
      return { 
        data: null, 
        isError: true, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  },

  async sendMessage(credentials: ApiCredentials, requestData: SendMessageRequest): Promise<ApiResponse> {
    try {
      const { idInstance, apiTokenInstance } = credentials;
      const url = `${BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatId: requestData.chatId,
          message: requestData.message
        })
      });
      
      const data = await response.json();
      
      return { data, isError: false };
    } catch (error) {
      return { 
        data: null, 
        isError: true, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  },

  async sendFileByUrl(credentials: ApiCredentials, requestData: SendFileRequest): Promise<ApiResponse> {
    try {
      const { idInstance, apiTokenInstance } = credentials;
      const url = `${BASE_URL}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatId: requestData.chatId,
          fileUrl: requestData.fileUrl,
          fileName: requestData.fileName
        })
      });
      
      const data = await response.json();
      
      return { data, isError: false };
    } catch (error) {
      return { 
        data: null, 
        isError: true, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }
};