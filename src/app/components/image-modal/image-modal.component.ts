import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {
    private _description: string;
    private _src: string;
    @Output() close = new EventEmitter();

    @Input()
    set description(_description) {
        this._description = _description;
    }

    @Input()
    set src(src) {
        this._src = src;
    }


    public hideModal() {
        setTimeout(() => {
            this.close.emit();
        }, 100);
    }

    get src(): string {
        return this._src;
    }

    get description(): string {
        return this._description;
    }
}
