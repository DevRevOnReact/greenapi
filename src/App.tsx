import React from 'react';
import Header from './components/Header';
import CredentialsForm from './components/CredentialsForm';
import ApiMethodCard from './components/ApiMethodCard';
import ApiResponseDisplay from './components/ApiResponseDisplay';
import SendMessageForm from './components/SendMessageForm';
import SendFileForm from './components/SendFileForm';
import { useApiCredentials } from './hooks/useApiCredentials';
import { useApiRequests } from './hooks/useApiRequests';

function App() {
  const { credentials, hasCredentials, handleCredentialsSave } = useApiCredentials();
  const {
    apiResponse,
    isLoading,
    handleGetSettings,
    handleGetStateInstance,
    handleSendMessage,
    handleSendFile
  } = useApiRequests(credentials);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Configuration and Input Forms */}
          <div className="col-span-1 space-y-6">
            <CredentialsForm 
              onSave={handleCredentialsSave} 
              credentials={credentials} 
            />3JW-MDM-XV2-sd3
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">API Methods</h2>
              <div className="space-y-3">
                <ApiMethodCard
                  title="getSettings"
                  description="Получить текущие настройки экземпляра"
                  onClick={handleGetSettings}
                  disabled={!hasCredentials}
                />
                <ApiMethodCard
                  title="getStateInstance"
                  description="Получить состояние экземпляра"
                  onClick={handleGetStateInstance}
                  disabled={!hasCredentials}
                />
              </div>
            </div>
          </div>
          
          {/* Middle Column - Message & File Forms */}
          <div className="col-span-1 space-y-6">
            <SendMessageForm 
              onSend={handleSendMessage} 
              credentials={credentials}
              disabled={!hasCredentials}
            />
            
            <SendFileForm 
              onSend={handleSendFile} 
              credentials={credentials}
              disabled={!hasCredentials}
            />
          </div>
          
          {/* Right Column - API Response */}
          <div className="col-span-1 md:col-span-1 bg-white p-5 rounded-lg shadow-md">
            <ApiResponseDisplay 
              response={apiResponse} 
              isLoading={isLoading} 
            />
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;