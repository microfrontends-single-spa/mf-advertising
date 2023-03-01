import { Component } from "@angular/core";

import { drawArc, drawLine, drawPieSlice, Piechart} from '../../../../utils/canvas.util';

import { APP_PREFIX } from "../../../../constans/app.constant";

@Component({
    selector: 'percentage-clients',
    templateUrl: './percentage-clients.component.html',
    styleUrls: ['./percentage-clients.component.scss']
})
export class PercentageClientsComponent {
    APP_PREFIX = APP_PREFIX;

    ngOnInit() {
        const canvas: any = document.getElementById('myCanvas');
        canvas.height = 190;
        canvas.width = 190;

        let empty = 20;
        let segment = 80;

        let myPiechart = new Piechart({
            canvas: canvas,
            data: {
                "Empty": empty,
                "Segment": segment,
            },
            colors: ["#C4C4C4", "#FF9800"],
            padding: 0,
            doughnutHoleSize: 0.45
        });
        myPiechart.drawSlices();

        /*setInterval(() => {
            empty = empty > 5 ?  empty - 1 : empty;
            segment = segment < 95 ? segment + 1 : segment;
        }, 1000)*/
    }
}