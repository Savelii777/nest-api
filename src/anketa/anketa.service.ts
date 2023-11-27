import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {map} from "rxjs/operators";
interface Child {
    id: string;
    name: string;
    birthday: string;
}
@Injectable()
export class AnketaService {
    constructor(private httpService: HttpService) {}

    async sendAnketa(number: number, phone: string, name: string, birthday: string, children: Child[], dateAccess: string, isPromo: boolean): Promise<boolean> {
        const url = '';
        const data = {
            "number": number,
            "phone": phone,
            "name": name,
            "birthday": birthday,
            "children": children,
            "dateAccess": dateAccess,
            "isPromo": isPromo
        };

        const response$ = this.httpService.post(url, data);

        return response$.pipe(
            map((response) => response.data.status === 'ok'),
        ).toPromise();
    }

}
