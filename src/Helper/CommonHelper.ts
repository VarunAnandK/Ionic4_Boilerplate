import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Storage } from '@ionic/storage';
@Injectable()
export class CommonHelper {
    constructor(private toastr: ToastrService, private storage: Storage) {
        this.ApiURL = environment.API_URL;
        this.StorageName = 'MKVUsers';
    }
    appPages: any;
    ApiURL: string;
    imagepath: string;
    StorageName: string;
    isLoginPage: boolean;
    exitcount: number;
    CurrentUser: any;
    deviceid: string;
    SetLocalStorage(name: string, data: any) {
        window.localStorage.setItem(name, JSON.stringify(data));
    }
    GetLocalStorage(name: string, jsonformat: boolean = false) {
        return (jsonformat ?   JSON.parse(window.localStorage.getItem(name)) :  window.localStorage.getItem(name));
    }
    DeleteAllLocalStorage() {
        return window.localStorage.clear();
    }

    DeleteLocalStorage(name: string) {
        return window.localStorage.removeItem(name);
    }
    SucessToastr(message: string, title: string) {
        this.toastr.success(message, title);
    }
    ErrorToastr(message: string, title: string) {
        this.toastr.error(message, title);
    }
    GetCurentUser() {
        let User = [];
        const data = JSON.parse(window.localStorage.getItem(this.StorageName));
        if (data != null) {
            User = data;
        }
        return User;
    }
}
