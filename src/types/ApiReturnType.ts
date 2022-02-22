export interface IServerReturn {
    error: boolean;
    statusCode: number;
    errorMessage?: string;
    successMessage?: string;
    data?: any
  }
  