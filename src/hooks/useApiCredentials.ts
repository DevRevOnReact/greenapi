import { useState } from 'react';
import { ApiCredentials } from '../types/api';

export const useApiCredentials = () => {
  const [credentials, setCredentials] = useState<ApiCredentials>({
    idInstance: '',
    apiTokenInstance: ''
  });

  const hasCredentials = Boolean(credentials.idInstance && credentials.apiTokenInstance);

  const handleCredentialsSave = (newCredentials: ApiCredentials) => {
    setCredentials(newCredentials);
  };

  return {
    credentials,
    hasCredentials,
    handleCredentialsSave
  };
}; 