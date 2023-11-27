import { Injectable } from '@nestjs/common';
import {map} from "rxjs/operators";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class PhoneService {
    constructor(private httpService: HttpService) {}

    private generatedCode: string;
    private context: any;

    async getCode(phone: string, code: string): Promise<boolean> {
        this.generatedCode = code;

        const url = '';
        const data = {
            messages: [
                {
                    from: 'sendersName',
                    to: phone,
                    text: code,
                    validity: 0,
                    scheduledTime: '2022-09-09T08:52:27.319Z',
                    priority: 'HIGH',
                    callbackUrl: 'https://www.callback-url.com/',
                    options: {
                        key1: 'value1',
                        key2: 'value2',
                    },
                },
            ],
        };

        const response$ = this.httpService.post(url, data);

        return response$.pipe(
            map((response) => response.data.status === 'ok'),
        ).toPromise();
    }

    async getGeneratedCode(): Promise<string> {
        return this.generatedCode;
    }
    setContext(context: any) {
        this.context = context;
    }

    getContext() {
        return this.context;
    }
}