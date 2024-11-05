import { create } from 'zustand';
import { type TransactionState, type BankProduct, type TransactionType, FormStep } from '@/features/banking/models/types/banking';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BankingStore extends TransactionState {
  setSelectedProduct: (product: BankProduct | null) => void;
  setTransactionType: (type: TransactionType | null) => void;
  setCurrentStep: (step: FormStep) => void;
  updateInfoTransaction: (data: Partial<TransactionState['infoTransaction']>) => void;
  setInfoTransaction: (data: TransactionState['infoTransaction']) => void;
  resetTransaction: () => void;
  setLoaderBackdrop: (loading: boolean, message?: { title: string; description: string }) => void;
}

const initialState: TransactionState = {
  selectedProduct: null,
  transactionType: null,
  currentStep: FormStep.DETAILS,
  infoTransaction: {
    dataForm: {},
    dataMeta: {},
  },
  loadingBackdrop: {
    isLoading: false,
  }
};

export const useBankingStore = create(
  persist<BankingStore>((set) => ({
    ...initialState,
    setSelectedProduct: (product) => set({ selectedProduct: product }),
    setTransactionType: (type) => set({ transactionType: type }),
    setCurrentStep: (step) => set({ currentStep: step }),
    setInfoTransaction: (data) => set({ infoTransaction: data }),
    updateInfoTransaction: (data) => set((state) => ({
      infoTransaction: {
        dataForm : {
          ...state.infoTransaction.dataForm,
          ...data.dataForm,
        },
        dataMeta: {
          ...state.infoTransaction.dataMeta,
          ...data.dataMeta,
        }
      },
    })),
    resetTransaction: () => set(initialState),
    setLoaderBackdrop: (isLoading, message) => set({ loadingBackdrop: { isLoading, message } }),
  }), {
    name: 'banking-store',
    storage: createJSONStorage(() => sessionStorage),
    partialize: (state) => 
      Object.fromEntries(
        Object.entries(state).filter(([key]) => !['loadingBackdrop'].includes(key))
      ) as BankingStore,
  }));

