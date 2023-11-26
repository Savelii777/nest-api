import { Injectable } from '@nestjs/common';
import {map} from "rxjs/operators";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class PhoneService {
    constructor(private httpService: HttpService) {}

    async checkPhone(phone: string, code: string): Promise<boolean> {

        const url = 'http://localhost:3000/anketa/check';
        const data = {
            messages: [
                {
                    from: "sendersName",
                    to: phone,
                    text: code,
                    validity: 0,
                    scheduledTime: "2022-09-09T08:52:27.319Z",
                    priority: "HIGH",
                    callbackUrl: "https://www.callback-url.com/",
                    options: {
                        key1: "value1",
                        key2: "value2"
                    }
                }
            ]
        };

        const response$ = this.httpService.post(url, data);

        return response$.pipe(
            map(response => response.data.status === 'ok'),
        ).toPromise();
    }
}