import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'grid-advertising',
    templateUrl: './grid-advertising.component.html',
    styleUrls: ['./grid-advertising.component.scss']
})
export class GridAdvertisingComponent {
    
    constructor(private router: Router) {}

    redirectTo() {
        this.router.navigate(['advertising/publicity/segments']);
    }
}