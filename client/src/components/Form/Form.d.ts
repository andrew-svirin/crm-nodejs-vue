export interface Form {
  validate (): Promise<{
    valid: boolean;
    errors: {
      id: string | number;
      errorMessages: string[];
    }[];
  }>;

  reset: () => void;
}
