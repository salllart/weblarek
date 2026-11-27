import { Component } from '../base/Component';

interface IGallery {
    items: HTMLElement[];
}

export class Gallery extends Component<IGallery> {
    constructor(protected container:HTMLElement) {
        super(container);
    }

    protected set items(value: HTMLElement[]) {
        this.container.replaceChildren(...value);
    }
}