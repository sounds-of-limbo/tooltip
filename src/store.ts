import { ReactNode } from "react"
import { action, computed, makeObservable, observable } from "mobx"

class TooltipStore {
	@observable
	private _position
		: {
			x: number
			y: number
		}
		= {
			x: 0,
			y: 0,
		}
	
	@observable
	private _fadeOut
		: boolean
		= false

	@observable
	private _display
		: boolean
		= false

	@observable
	private _content
		: ReactNode
		= undefined
	
	constructor() {
		makeObservable(this)
	}

	@computed
	get position() {
		return this._position
	}

	@computed
	get isFadedOut() {
		return this._fadeOut
	}

	@computed
	get isDisplayed() {
		return this._display
	}

	@computed
	get content() {
		return this._content
	}

	@action
	setContent = (
		content: ReactNode,
	) => {
		this._content = content
		this._display = true
		this._fadeOut = false
	}

	@action
	setPosition = (
		x: number = this.position.x,
		y: number = this.position.y,
	) => {
		if (this.isFadedOut || !this.isDisplayed)
			return

		this.position.x = x
		this.position.y = y
	}

	@action
	hide = () => {
		this._display = false
		this._fadeOut = false
	}

	@action
	fadeOut = () => {
		this._fadeOut = true
	}
}

export const store = new TooltipStore()