import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';

@Directive({
    selector: '[ngGrid]',
})
export class NgGridDirective {

    private onDestroy$ = new Subject<boolean>();

    private thead: HTMLTableSectionElement | any;
    private tbody: HTMLTableSectionElement | any;

    private theadChanged$ = new BehaviorSubject(true);
    private tbodyChanged$ = new Subject<boolean>();

    private theadObserver = new MutationObserver(() =>
        this.theadChanged$.next(true)
    );
    private tbodyObserver = new MutationObserver(() =>
        this.tbodyChanged$.next(true)
    );

    constructor(private table: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.thead = this.table.nativeElement.querySelector('thead');
        this.tbody = this.table.nativeElement.querySelector('tbody');

        this.theadObserver.observe(this.thead, {
            characterData: true,
            subtree: true
        });
        this.tbodyObserver.observe(this.tbody, { childList: true });
    }

    ngAfterViewInit(): void {
        const cols = this.thead.querySelector('tr').querySelectorAll('th');
        const rows = this.tbody.querySelectorAll('tr');
        rows.forEach((row: any) => {
            row.querySelectorAll('td').forEach((col: any, index: number) => {
                col.insertAdjacentHTML('afterbegin',`<div class="theadrow">${cols[index].innerText}</div>`);
            })
        });
    }

    ngOnDestroy(): void {
        this.theadObserver.disconnect();
        this.tbodyObserver.disconnect();

        this.onDestroy$.next(true);
    }
}