import { ReactNode } from "react";
declare class TooltipStore {
    private _position;
    private _fadeOut;
    private _display;
    private _content;
    constructor();
    get position(): {
        x: number;
        y: number;
    };
    get isFadedOut(): boolean;
    get isDisplayed(): boolean;
    get content(): ReactNode;
    setContent: (content: ReactNode) => void;
    setPosition: (x?: number, y?: number) => void;
    hide: () => void;
    fadeOut: () => void;
}
export declare const store: TooltipStore;
export {};
