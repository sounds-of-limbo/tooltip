import React from "react";
interface TooltipDisplayProps {
}
interface TooltipDisplayState {
}
export declare class TooltipDisplay extends React.PureComponent<TooltipDisplayProps, TooltipDisplayState> {
    static fadeOutAnimationName?: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleMouseMove: (event: MouseEvent) => void;
    render(): JSX.Element;
}
export {};
