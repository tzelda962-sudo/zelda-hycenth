import type { Invitation } from "../../domain/invitation/Invitation";
import type { InvitationRepository } from "../../domain/invitation/InvitationRepository";
import { Invitation as InvitationEntity } from "../../domain/invitation/Invitation";

export class InMemoryInvitationRepository implements InvitationRepository {
  private invitation: Invitation = new InvitationEntity(false);

  async getInvitation(): Promise<Invitation> {
    return this.invitation;
  }

  async save(invitation: Invitation): Promise<void> {
    this.invitation = invitation;
  }
}
