import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    login(user: string, password: string): boolean {
        if (user === 'user' && password === '123') {
            localStorage.setItem('userName', user);
            return true;
        }
        return false;
    }

    logout(): any {
        localStorage.removeItem('userName');
    }

    getUser(): any {
        return localStorage.getItem('userName');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export var AUTH_PROVIDERS: Array<any> = [{
    provide: AuthService,
    useClass: AuthService
}];
