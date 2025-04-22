export interface ApiCredentials {
  idInstance: string;
  apiTokenInstance: string;
}

export interface SendMessageRequest {
  chatId: string;
  message: string;
}

export interface SendFileRequest {
  chatId: string;
  fileUrl: string;
  fileName: string;
}

export interface ApiResponse {
  data: any;
  isError: boolean;
  error?: string;
}