// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private storageKey = 'name';

  get name(): string {
    return localStorage.getItem(this.storageKey) || '';
  }

  set name(value: string) {
    localStorage.setItem(this.storageKey, value);
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }

  isUserSetted(): boolean {
    return !!this.name;
  }
}
