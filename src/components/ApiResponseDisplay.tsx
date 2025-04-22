import React from 'react';

interface ApiResponseDisplayProps {
  response: any;
  isLoading: boolean;
}

const ApiResponseDisplay: React.FC<ApiResponseDisplayProps> = ({ response, isLoading }) => {
  const formattedResponse = response ? JSON.stringify(response, null, 2) : '';

  return (
    <div className="w-full">
      <h3 className="font-medium text-gray-700 mb-2">API Response</h3>
      <div className="relative min-h-60 w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 z-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
          </div>
        )}
        <pre className="bg-gray-50 p-4 rounded-lg overflow-auto max-h-96 text-sm font-mono w-full border border-gray-200">
          {formattedResponse || 'No response yet. Click on one of the API methods above.'}
        </pre>
      </div>
    </div>
  );
};

export default ApiResponseDisplay;