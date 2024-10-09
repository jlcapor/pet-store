import { create } from "zustand"

export type Modal = "login" | "signup" | "search" | "facets-mobile" | "review"

interface ModalStore {
  modals: Partial<Record<Modal, boolean>>
  openModal: (modal: Modal) => void
  closeModal: (modal: Modal) => void
  closeAllModals: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: {},

  openModal: (modalId: Modal) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),

  closeModal: (modalId: Modal) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: false },
    })),

  closeAllModals: () =>
    set((state) => ({
      // Aquí usamos correctamente Object.keys con el tipo Modal
        modals: Object.keys(state.modals).reduce<Partial<Record<Modal, boolean>>>(
        (acc, modalId) => {
          acc[modalId as Modal] = false // Aseguramos que modalId es de tipo Modal
          return acc
        },
        {} // Inicializamos con un objeto vacío del tipo correcto
      ),
    })),
}))
