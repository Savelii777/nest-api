import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import {HttpService} from "@nestjs/axios";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SmartcapchaService {
    constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

    async checkCaptcha(token: string): Promise<boolean> {

        const url = `${this.configService.get('SMARTCAPCHA_URL')}`;
        const params = {
            secret: this.configService.get('SMARTCAPCHA_SECRET'),
            token,
        };

        const response$ = this.httpService.get(url, { params });

        return response$.pipe(
            map(response => response.data.status === 'ok'),
        ).toPromise();
    }
}