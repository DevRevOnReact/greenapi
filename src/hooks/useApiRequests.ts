import { useState } from 'react';
import { ApiCredentials, ApiResponse, SendFileRequest, SendMessageRequest } from '../types/api';
import { apiService } from '../services/apiService';

export const useApiRequests = (credentials: ApiCredentials) => {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleApiCall = async (
    apiMethod: (creds: ApiCredentials, ...args: any[]) => Promise<ApiResponse>,
    ...args: any[]
  ) => {
    setIsLoading(true);
    try {
      const response = await apiMethod(credentials, ...args);
      setApiResponse(response);
    } catch (error) {
      setApiResponse({
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetSettings = () => {
    handleApiCall(apiService.getSettings);
  };

  const handleGetStateInstance = () => {
    handleApiCall(apiService.getStateInstance);
  };

  const handleSendMessage = (data: SendMessageRequest) => {
    handleApiCall(apiService.sendMessage, data);
  };

  const handleSendFile = (data: SendFileRequest) => {
    handleApiCall(apiService.sendFileByUrl, data);
  };

  return {
    apiResponse,
    isLoading,
    handleGetSettings,
    handleGetStateInstance,
    handleSendMessage,
    handleSendFile
  };
}; 