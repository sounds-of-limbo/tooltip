import * as React from "react";
interface TooltipProps<E extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> {
    element?: E;
    elementProps?: React.HTMLAttributes<HTMLElementTagNameMap[E]>;
    content?: React.ReactNode;
    children: React.ReactNode;
}
export declare class TooltipElement<E extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> extends React.PureComponent<TooltipProps, {}> {
    static defaultProps: {
        element: string;
    };
    private fadeOut;
    componentWillUnmount(): void;
    handleMouseEnter: (event: React.MouseEvent<HTMLElementTagNameMap[E]>) => void;
    handleMouseLeave: (event: React.MouseEvent<HTMLElementTagNameMap[E]>) => void;
    render(): JSX.Element;
}
export {};
