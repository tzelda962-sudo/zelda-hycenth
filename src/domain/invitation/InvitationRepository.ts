import type { Invitation } from "./Invitation";

export interface InvitationRepository {
  getInvitation(): Promise<Invitation>;
  save(invitation: Invitation): Promise<void>;
}
