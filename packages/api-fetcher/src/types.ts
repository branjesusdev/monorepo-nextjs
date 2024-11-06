export interface ApiResponse<T> {
    data: T;
    status: number;
    headers: Record<string, string>;
  }
  
  export type ApiError = {
    message: string;
    status?: number;
  };