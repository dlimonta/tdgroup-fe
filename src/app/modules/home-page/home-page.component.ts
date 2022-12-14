import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
    showLogin: boolean = false;
    constructor() {}

    ngOnInit(): void {}

    onSignup() {
        this.showLogin = !this.showLogin;
    }
}
