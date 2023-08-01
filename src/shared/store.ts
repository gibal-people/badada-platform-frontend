import { create } from 'zustand';

interface SelectContentState {
  selectContent: number;
  setSelectContent: (select: number) => void;
}

interface ReviewState {
  isBadClicked: boolean;
  setIsBadClicked: () => void;
  isGoodClicked: boolean;
  setIsGoodClicked: () => void;
}

export const useStore = create<SelectContentState>((set) => ({
  selectContent: 0,
  setSelectContent: (select) => {
    set((state) => ({ ...state, selectContent: select }));
  },
}));

export const useReview = create<ReviewState>((set) => ({
  isBadClicked: false,
  isGoodClicked: false,
  setIsBadClicked: () => set((state) => ({ ...state, isBadClicked: !state.isBadClicked, isGoodClicked: false })),
  setIsGoodClicked: () => set((state) => ({ ...state, isGoodClicked: !state.isGoodClicked, isBadClicked: false })),
}));
