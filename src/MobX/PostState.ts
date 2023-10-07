/* eslint-disable prettier/prettier */
import { makeObservable, observable, action } from 'mobx';

class PostState {
    title = '';
    description = '';
    media = [];
    flight = {};
    community = [];

    constructor() {
        makeObservable(
            this,
            {
                title: observable,
                description: observable,
                media: observable,
                flight: observable,
                community: observable,
                updateTitle: action.bound,
                updateDescription: action.bound,
            },
            { autoBind: true },
        );
    }

    updateTitle(text: string) {
        this.title = text;
    }
    updateDescription(text: string) {
        this.description = text;
    }
}

export const PostStateInstance = new PostState();
