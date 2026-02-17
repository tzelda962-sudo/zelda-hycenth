import { defineStore } from "pinia";
import { ref } from "vue";
import { Invitation } from "../../domain/invitation/Invitation";
import { InMemoryInvitationRepository } from "../../infrastructure/persistence/InMemoryInvitationRepository";
import { OpenInvitationUseCase } from "../../application/invitation/OpenInvitationUseCase";

export const useInvitationStore = defineStore("invitation", () => {
  const isOpen = ref(false);

  // Dependency Injection (Manually for now, could use a proper DI container)
  const repository = new InMemoryInvitationRepository();
  const openInvitationUseCase = new OpenInvitationUseCase(repository);

  async function openInvitation() {
    const result = await openInvitationUseCase.execute();
    isOpen.value = result.isOpen;
  }

  return {
    isOpen,
    openInvitation,
  };
});
