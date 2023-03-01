export const drawLine = (ctx: any, startX: number, startY: number, endX: number, endY: number, color: string) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.restore();
}

export const drawArc = (ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: any, color: string) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.restore();
}

export const drawPieSlice = (ctx: any, centerX: number, centerY: number, radius: any, startAngle: any, endAngle: any, fillColor: string, strokeColor: string) => {
    ctx.save();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

export class Piechart {
    options: any;
    canvas: any;
    ctx: any;
    colors: any;
    titleOptions: any;
    totalValue: any;
    radius: any;

    constructor(options: any) {
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.colors = options.colors;
        this.titleOptions = options.titleOptions;
        this.totalValue = [...Object.values(this.options.data)].reduce((a: any, b: any) => a + b, 0);
        this.radius = Math.min(this.canvas.width / 2, this.canvas.height / 2) - (options.padding ? options.padding : 0);
    }

    drawSlices() {
        let colorIndex = 0;
        let startAngle = -Math.PI / 2;

        for(const categ in this.options.data) {
            const val = this.options.data[categ];
            const sliceAngle = (2 * Math.PI * val ) / this.totalValue;
            
            drawPieSlice(
                this.ctx, 
                this.canvas.width / 2, 
                this.canvas.height / 2,
                this.radius,
                startAngle,
                startAngle + sliceAngle,
                this.colors[colorIndex % this.colors.length],
                this.colors[colorIndex % this.colors.length]
            );

            startAngle += sliceAngle;
            colorIndex++;
        }

        if (this.options?.doughnutHoleSize) {
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.options.doughnutHoleSize * this.radius,
                0,
                2 * Math.PI,
                "#FFF",
                "#FFF"
            );
        }
        this.drawLabels();
    }

    drawLabels() {
        let startAngle = -Math.PI / 2;

        for(const categ in this.options.data) {
            const val = this.options.data[categ];
            const sliceAngle = (2 * Math.PI * val ) / this.totalValue;

            let labelX = this.canvas.width / 2 + (this.radius / 2) * Math.cos(startAngle + sliceAngle / 2);
            let labelY = this.canvas.height / 2 + (this.radius / 2) * Math.sin(startAngle + sliceAngle / 2);

            if (this.options?.doughnutHoleSize) {
                const offset = (this.radius * this.options.doughnutHoleSize) / 2;

                labelX = this.canvas.width / 2 + (offset + this.radius / 2) * Math.cos(startAngle + sliceAngle / 2);
                labelY = this.canvas.height / 2 + (offset + this.radius / 2) * Math.sin(startAngle + sliceAngle / 2);
            }

            const labelText = Math.round((100 * val) / this.totalValue);
            this.ctx.fillStyle = "white";
            this.ctx.font = "bold 12px Roboto"
            this.ctx.fillText(labelText + '%', labelX, labelY);
            startAngle += sliceAngle;
        }
    }
}