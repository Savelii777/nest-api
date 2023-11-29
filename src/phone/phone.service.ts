import { Injectable } from '@nestjs/common';
import {map} from "rxjs/operators";
import {HttpService} from "@nestjs/axios";
import { ConfigService } from '@nestjs/config';

interface IContext {
    generatedCode: string;
    userPhone: string;
}
@Injectable()
export class PhoneService {

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {}

    private generatedCode: string;
    private userPhone: string;
    private context: IContext;

    async getCode(phone: string): Promise<boolean> {
        this.generatedCode = Math.floor(
            Math.random() * (999999 - 100000 + 1) + 100000
        ).toString();
        console.log(`сгенерированный код ${this.generatedCode}`);
        this.userPhone = phone;
        const url = `${this.configService.get('PHONE_API_URL')}`;
        const data = {
            messages: [
                {
                    from: this.configService.get('SENDERS_NAME'),
                    to: phone,
                    text: this.generatedCode,
                    validity: 0,
                    scheduledTime: '2022-09-09T08:52:27.319Z',
                    priority: 'HIGH',
                },
            ],
        };
        const headers = {
            Authorization: `Key ${this.configService.get('PHONE_AUTHORISATON_KEY')}`,
        };

        const response$ = this.httpService.post(url, data, { headers });

        return response$.pipe(
            map((response) => response.data.status === 'ok')
        ).toPromise();
    }

    async getGeneratedCode(): Promise<string[]> {
        return [this.generatedCode, this.userPhone];
    }

    setContext(generatedcode:string, userphone:string) {
        this.context = {
            userPhone: userphone,
            generatedCode: generatedcode
        };
    }

    getContext() {
        return this.context;
    }
}