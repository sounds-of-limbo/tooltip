import * as React from "react"

import { store } from "./store"
import { TooltipDisplay } from "./display"

interface TooltipProps<E extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> {
	element?: E
	elementProps?: React.HTMLAttributes<HTMLElementTagNameMap[E]>
	content?: React.ReactNode
	children?: React.ReactNode
}

export
class TooltipElement<E extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap>
extends React.PureComponent<TooltipProps, {}> {
	static defaultProps
		= {
			element: "div",
		}

	private fadeOut = () => {
		const { fadeOutAnimationName } = TooltipDisplay
		if (typeof fadeOutAnimationName == "undefined")
			store.hide()
		else
			store.fadeOut()
	}

	componentWillUnmount() {
		this.fadeOut()
	}

	handleMouseEnter = (
		event: React.MouseEvent<HTMLElementTagNameMap[E]>
	) => {
		this.props.elementProps?.onMouseEnter?.(event)

		if (!this.props.content)
			return

		store.setContent(this.props.content)
	}

	handleMouseLeave = (
		event: React.MouseEvent<HTMLElementTagNameMap[E]>
	) => {
		this.props.elementProps?.onMouseLeave?.(event)

		this.fadeOut()
	}

	render() {
		const { element, elementProps = {} } = this.props
		const Element = element! as React.ElementType
		return <>
			<Element
				{...elementProps}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.props.children}
			</Element>
		</>
	}
}