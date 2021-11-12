import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://api.smitegame.com/smiteapi.svc';
    public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}