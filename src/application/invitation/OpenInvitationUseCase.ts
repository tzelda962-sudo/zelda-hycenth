import type { InvitationRepository } from "../../domain/invitation/InvitationRepository";
import type { Invitation } from "../../domain/invitation/Invitation";

export class OpenInvitationUseCase {
  constructor(private readonly repository: InvitationRepository) {}

  async execute(): Promise<Invitation> {
    const invitation = await this.repository.getInvitation();
    const openedInvitation = invitation.open();
    await this.repository.save(openedInvitation);
    return openedInvitation;
  }
}
