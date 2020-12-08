import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface AddUserState {
    user: any;
}

@Injectable()
export class AddUserStore extends ComponentStore<AddUserState> {

    constructor() {
        super({ user: {} });
    }
}
