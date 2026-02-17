export class Invitation {
  constructor(public readonly isOpen: boolean = false) {}

  open(): Invitation {
    return new Invitation(true);
  }
}
