import * as React from "react"
import { observer } from "mobx-react"

import { store } from "./store"

interface TooltipDisplayProps {
	
}

interface TooltipDisplayState {

}

@observer
export
class TooltipDisplay
extends React.PureComponent<TooltipDisplayProps, TooltipDisplayState> {
	static fadeOutAnimationName?
		: string
		= undefined

	componentDidMount() {
		document.addEventListener("mousemove", this.handleMouseMove)
	}

	componentWillUnmount() {
		document.removeEventListener("mousemove", this.handleMouseMove)
	}

	handleMouseMove = (
		event: MouseEvent
	) => {
		store.setPosition(event.x, event.y)
	}

	render() {
		const { isDisplayed } = store
		return <>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 99999,
					pointerEvents: "none",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: "-100%",
						bottom: "-100%",
					}}
				>
					{isDisplayed && <TooltipContent />}
				</div>
			</div>
		</>
	}
}

@observer
class TooltipContent
extends React.PureComponent<{}, { isShifted: boolean }> {
	state
		= {
			isShifted: false
		}

	div
		: HTMLDivElement | null

	componentDidUpdate() {
		const { x } = store.position
		const isShifted = x + 20 + (this.div?.offsetWidth || 0) >= document.body.offsetWidth
		if (this.state.isShifted != isShifted)
			this.setState({
				isShifted,
			})
	}

	handleAnimationEnd = (
		event: React.AnimationEvent<HTMLDivElement>
	) => {
		const { fadeOutAnimationName } = TooltipDisplay
		if (typeof fadeOutAnimationName == "undefined")
			return
		
		if (event.animationName == fadeOutAnimationName)
			store.hide()
	}

	render() {
		const { isFadedOut, position, content } = store
		const { x, y } = position
		const { isShifted } = this.state
		return <>
			<div
				ref={r => this.div = r}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					maxWidth: 320,
					transform: `translate(${x + 10}px, ${y + 10}px) translateX(${isShifted ? "calc(-100% - 30px)" : "0"}) translateZ(0)`,
				}}
				className={`sol__tooltip fade-${isFadedOut ? "out" : "in"}`}
				onAnimationEnd={this.handleAnimationEnd}
			>
				{content}
			</div>
		</>
	}
}