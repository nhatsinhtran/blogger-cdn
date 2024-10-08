/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/air-datepicker@3.3.5/air-datepicker.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define([], t)
		: "object" == typeof exports
		? (exports.AirDatepicker = t())
		: (e.AirDatepicker = t());
})(this, function () {
	return (function () {
		"use strict";
		var e = {
				d: function (t, i) {
					for (var s in i)
						e.o(i, s) &&
							!e.o(t, s) &&
							Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
				},
				o: function (e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				},
			},
			t = {};
		e.d(t, {
			default: function () {
				return K;
			},
		});
		var i = {
				days: "days",
				months: "months",
				years: "years",
				day: "day",
				month: "month",
				year: "year",
				eventChangeViewDate: "changeViewDate",
				eventChangeCurrentView: "changeCurrentView",
				eventChangeFocusDate: "changeFocusDate",
				eventChangeSelectedDate: "changeSelectedDate",
				eventChangeTime: "changeTime",
				eventChangeLastSelectedDate: "changeLastSelectedDate",
				actionSelectDate: "selectDate",
				actionUnselectDate: "unselectDate",
				cssClassWeekend: "-weekend-",
			},
			s = {
				classes: "",
				inline: !1,
				locale: {
					days: [
						"Воскресенье",
						"Понедельник",
						"Вторник",
						"Среда",
						"Четверг",
						"Пятница",
						"Суббота",
					],
					daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
					daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					months: [
						"Январь",
						"Февраль",
						"Март",
						"Апрель",
						"Май",
						"Июнь",
						"Июль",
						"Август",
						"Сентябрь",
						"Октябрь",
						"Ноябрь",
						"Декабрь",
					],
					monthsShort: [
						"Янв",
						"Фев",
						"Мар",
						"Апр",
						"Май",
						"Июн",
						"Июл",
						"Авг",
						"Сен",
						"Окт",
						"Ноя",
						"Дек",
					],
					today: "Сегодня",
					clear: "Очистить",
					dateFormat: "dd.MM.yyyy",
					timeFormat: "HH:mm",
					firstDay: 1,
				},
				startDate: new Date(),
				firstDay: "",
				weekends: [6, 0],
				dateFormat: "",
				altField: "",
				altFieldDateFormat: "T",
				toggleSelected: !0,
				keyboardNav: !0,
				selectedDates: !1,
				container: "",
				isMobile: !1,
				visible: !1,
				position: "bottom left",
				offset: 12,
				view: i.days,
				minView: i.days,
				showOtherMonths: !0,
				selectOtherMonths: !0,
				moveToOtherMonthsOnSelect: !0,
				showOtherYears: !0,
				selectOtherYears: !0,
				moveToOtherYearsOnSelect: !0,
				minDate: "",
				maxDate: "",
				disableNavWhenOutOfRange: !0,
				multipleDates: !1,
				multipleDatesSeparator: ", ",
				range: !1,
				dynamicRange: !0,
				buttons: !1,
				monthsField: "monthsShort",
				showEvent: "focus",
				autoClose: !1,
				prevHtml: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1917 8.05862C20.2499 8.11667 20.296 8.18564 20.3276 8.26158C20.3591 8.33751 20.3753 8.41891 20.3753 8.50112C20.3753 8.58333 20.3591 8.66473 20.3276 8.74066C20.296 8.81659 20.2499 8.88556 20.1917 8.94362L13.1329 16.0011L20.1917 23.0586C20.309 23.176 20.375 23.3351 20.375 23.5011C20.375 23.6671 20.309 23.8263 20.1917 23.9436C20.0743 24.061 19.9151 24.1269 19.7492 24.1269C19.5832 24.1269 19.424 24.061 19.3067 23.9436L11.8067 16.4436C11.7485 16.3856 11.7023 16.3166 11.6708 16.2407C11.6393 16.1647 11.623 16.0833 11.623 16.0011C11.623 15.9189 11.6393 15.8375 11.6708 15.7616C11.7023 15.6856 11.7485 15.6167 11.8067 15.5586L19.3067 8.05862C19.3647 8.00041 19.4337 7.95423 19.5096 7.92273C19.5856 7.89122 19.667 7.875 19.7492 7.875C19.8314 7.875 19.9128 7.89122 19.9887 7.92273C20.0646 7.95423 20.1336 8.00041 20.1917 8.05862V8.05862Z" fill="#074C31"/>
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="black" stroke-opacity="0.1"/>
                </svg>
                `,
				nextHtml: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8067 8.05862C11.8647 8.00041 11.9337 7.95423 12.0096 7.92273C12.0856 7.89122 12.167 7.875 12.2492 7.875C12.3314 7.875 12.4128 7.89122 12.4887 7.92273C12.5646 7.95423 12.6336 8.00041 12.6917 8.05862L20.1917 15.5586C20.2499 15.6167 20.296 15.6856 20.3276 15.7616C20.3591 15.8375 20.3753 15.9189 20.3753 16.0011C20.3753 16.0833 20.3591 16.1647 20.3276 16.2407C20.296 16.3166 20.2499 16.3856 20.1917 16.4436L12.6917 23.9436C12.5743 24.061 12.4151 24.1269 12.2492 24.1269C12.0832 24.1269 11.924 24.061 11.8067 23.9436C11.6893 23.8263 11.6234 23.6671 11.6234 23.5011C11.6234 23.3351 11.6893 23.176 11.8067 23.0586L18.8654 16.0011L11.8067 8.94362C11.7485 8.88556 11.7023 8.81659 11.6708 8.74066C11.6393 8.66473 11.623 8.58333 11.623 8.50112C11.623 8.41891 11.6393 8.33751 11.6708 8.26158C11.7023 8.18564 11.7485 8.11667 11.8067 8.05862V8.05862Z" fill="#074C31"/>
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="black" stroke-opacity="0.1"/>
                </svg>
                `,
				navTitles: {
					days: "MMMM, <i>yyyy</i>",
					months: "yyyy",
					years: "yyyy1 - yyyy2",
				},
				timepicker: !1,
				onlyTimepicker: !1,
				dateTimeSeparator: " ",
				timeFormat: "",
				minHours: 0,
				maxHours: 24,
				minMinutes: 0,
				maxMinutes: 59,
				hoursStep: 1,
				minutesStep: 1,
				onSelect: !1,
				onChangeViewDate: !1,
				onChangeView: !1,
				onRenderCell: !1,
				onShow: !1,
				onHide: !1,
				onClickDayName: !1,
			};
		function a(e) {
			let t =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: document;
			return "string" == typeof e ? t.querySelector(e) : e;
		}
		function n() {
			let {
					tagName: e = "div",
					className: t = "",
					innerHtml: i = "",
					id: s = "",
					attrs: a = {},
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				n = document.createElement(e);
			return (
				t && n.classList.add(...t.split(" ")),
				s && (n.id = s),
				i && (n.innerHTML = i),
				a && r(n, a),
				n
			);
		}
		function r(e, t) {
			for (let [i, s] of Object.entries(t))
				void 0 !== s && e.setAttribute(i, s);
			return e;
		}
		function h(e) {
			return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
		}
		function o(e) {
			let t = e.getHours(),
				{ hours: i, dayPeriod: s } = l(t);
			return {
				year: e.getFullYear(),
				month: e.getMonth(),
				fullMonth:
					e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
				date: e.getDate(),
				fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
				day: e.getDay(),
				hours: t,
				fullHours: d(t),
				hours12: i,
				dayPeriod: s,
				fullHours12: d(i),
				minutes: e.getMinutes(),
				fullMinutes:
					e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
			};
		}
		function l(e) {
			return {
				dayPeriod: e > 11 ? "pm" : "am",
				hours: e % 12 == 0 ? 12 : e % 12,
			};
		}
		function d(e) {
			return e < 10 ? "0" + e : e;
		}
		function c(e) {
			let t = 10 * Math.floor(e.getFullYear() / 10);
			return [t, t + 9];
		}
		function u() {
			let e = [];
			for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++)
				i[s] = arguments[s];
			return (
				i.forEach((t) => {
					if ("object" == typeof t) for (let i in t) t[i] && e.push(i);
					else t && e.push(t);
				}),
				e.join(" ")
			);
		}
		function p(e, t) {
			let s =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
			if (!e || !t) return !1;
			let a = o(e),
				n = o(t),
				r = {
					[i.days]:
						a.date === n.date && a.month === n.month && a.year === n.year,
					[i.months]: a.month === n.month && a.year === n.year,
					[i.years]: a.year === n.year,
				};
			return r[s];
		}
		function m(e, t, i) {
			let s = g(e, !1).getTime(),
				a = g(t, !1).getTime();
			return i ? s >= a : s > a;
		}
		function v(e, t) {
			return !m(e, t, !0);
		}
		function g(e) {
			let t =
					!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
				i = new Date(e.getTime());
			return "boolean" != typeof t || t || D(i), i;
		}
		function D(e) {
			return e.setHours(0, 0, 0, 0), e;
		}
		function y(e, t, i) {
			e.length
				? e.forEach((e) => {
						e.addEventListener(t, i);
				  })
				: e.addEventListener(t, i);
		}
		function f(e, t) {
			return (
				!(!e || e === document || e instanceof DocumentFragment) &&
				(e.matches(t) ? e : f(e.parentNode, t))
			);
		}
		function w(e, t, i) {
			return e > i ? i : e < t ? t : e;
		}
		function b(e) {
			for (
				var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1;
				s < t;
				s++
			)
				i[s - 1] = arguments[s];
			return (
				i
					.filter((e) => e)
					.forEach((t) => {
						for (let [i, s] of Object.entries(t))
							if (void 0 !== s && "[object Object]" === s.toString()) {
								let t = void 0 !== e[i] ? e[i].toString() : void 0,
									a = s.toString(),
									n = Array.isArray(s) ? [] : {};
								(e[i] = e[i] ? (t !== a ? n : e[i]) : n), b(e[i], s);
							} else e[i] = s;
					}),
				e
			);
		}
		function k(e) {
			let t = e;
			return (
				e instanceof Date || (t = new Date(e)),
				isNaN(t.getTime()) &&
					(console.log(`Unable to convert value "${e}" to Date object`),
					(t = !1)),
				t
			);
		}
		function C(e) {
			let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
			return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
		}
		function $(e, t, i) {
			return (
				(t = (function (e) {
					var t = (function (e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t);
							if ("object" != typeof s) return s;
							throw new TypeError(
								"@@toPrimitive must return a primitive value."
							);
						}
						return String(e);
					})(e, "string");
					return "symbol" == typeof t ? t : String(t);
				})(t)) in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class _ {
			constructor() {
				let {
					type: e,
					date: t,
					dp: i,
					opts: s,
					body: a,
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				$(this, "focus", () => {
					this.$cell.classList.add("-focus-"), (this.focused = !0);
				}),
					$(this, "removeFocus", () => {
						this.$cell.classList.remove("-focus-"), (this.focused = !1);
					}),
					$(this, "select", () => {
						this.$cell.classList.add("-selected-"), (this.selected = !0);
					}),
					$(this, "removeSelect", () => {
						this.$cell.classList.remove(
							"-selected-",
							"-range-from-",
							"-range-to-"
						),
							(this.selected = !1);
					}),
					$(this, "onChangeSelectedDate", () => {
						this.isDisabled ||
							(this._handleSelectedStatus(),
							this.opts.range && this._handleRangeStatus());
					}),
					$(this, "onChangeFocusDate", (e) => {
						if (!e) return void (this.focused && this.removeFocus());
						let t = p(e, this.date, this.type);
						t ? this.focus() : !t && this.focused && this.removeFocus(),
							this.opts.range && this._handleRangeStatus();
					}),
					$(
						this,
						"render",
						() => (
							(this.$cell.innerHTML = this._getHtml()),
							(this.$cell.adpCell = this),
							this.$cell
						)
					),
					(this.type = e),
					(this.singleType = this.type.slice(0, -1)),
					(this.date = t),
					(this.dp = i),
					(this.opts = s),
					(this.body = a),
					(this.customData = !1),
					this.init();
			}
			init() {
				let { range: e, onRenderCell: t } = this.opts;
				t &&
					(this.customData = t({
						date: this.date,
						cellType: this.singleType,
						datepicker: this.dp,
					})),
					this._createElement(),
					this._bindDatepickerEvents(),
					this._handleInitialFocusStatus(),
					this.dp.hasSelectedDates &&
						(this._handleSelectedStatus(), e && this._handleRangeStatus());
			}
			_bindDatepickerEvents() {
				this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
					this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
			}
			unbindDatepickerEvents() {
				this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
					this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
			}
			_createElement() {
				var e;
				let { year: t, month: i, date: s } = o(this.date),
					a =
						(null === (e = this.customData) || void 0 === e
							? void 0
							: e.attrs) || {};
				this.$cell = n({
					className: this._getClassName(),
					attrs: { "data-year": t, "data-month": i, "data-date": s, ...a },
				});
			}
			_getClassName() {
				var e, t;
				let s = new Date(),
					{ selectOtherMonths: a, selectOtherYears: n } = this.opts,
					{ minDate: r, maxDate: h } = this.dp,
					{ day: l } = o(this.date),
					d = this._isOutOfMinMaxRange(),
					c =
						null === (e = this.customData) || void 0 === e
							? void 0
							: e.disabled,
					m = u("air-datepicker-cell", `-${this.singleType}-`, {
						"-current-": p(s, this.date, this.type),
						"-min-date-": r && p(r, this.date, this.type),
						"-max-date-": h && p(h, this.date, this.type),
					}),
					v = "";
				switch (this.type) {
					case i.days:
						v = u({
							"-weekend-": this.dp.isWeekend(l),
							"-other-month-": this.isOtherMonth,
							"-disabled-": (this.isOtherMonth && !a) || d || c,
						});
						break;
					case i.months:
						v = u({ "-disabled-": d || c });
						break;
					case i.years:
						v = u({
							"-other-decade-": this.isOtherDecade,
							"-disabled-": d || (this.isOtherDecade && !n) || c,
						});
				}
				return u(
					m,
					v,
					null === (t = this.customData) || void 0 === t ? void 0 : t.classes
				);
			}
			_getHtml() {
				var e;
				let { year: t, month: s, date: a } = o(this.date),
					{ showOtherMonths: n, showOtherYears: r } = this.opts;
				if (null !== (e = this.customData) && void 0 !== e && e.html)
					return this.customData.html;
				switch (this.type) {
					case i.days:
						return !n && this.isOtherMonth ? "" : a;
					case i.months:
						return this.dp.locale[this.opts.monthsField][s];
					case i.years:
						return !r && this.isOtherDecade ? "" : t;
				}
			}
			_isOutOfMinMaxRange() {
				let { minDate: e, maxDate: t } = this.dp,
					{ type: s, date: a } = this,
					{ month: n, year: r, date: h } = o(a),
					l = s === i.days,
					d = s === i.years,
					c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()),
					u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
				return e && t ? v(c, e) || m(u, t) : e ? v(c, e) : t ? m(u, t) : void 0;
			}
			destroy() {
				this.unbindDatepickerEvents();
			}
			_handleRangeStatus() {
				let { rangeDateFrom: e, rangeDateTo: t } = this.dp,
					i = u({
						"-in-range-":
							e && t && ((s = this.date), (a = e), (n = t), m(s, a) && v(s, n)),
						"-range-from-": e && p(this.date, e, this.type),
						"-range-to-": t && p(this.date, t, this.type),
					});
				var s, a, n;
				this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"),
					i && this.$cell.classList.add(...i.split(" "));
			}
			_handleSelectedStatus() {
				let e = this.dp._checkIfDateIsSelected(this.date, this.type);
				e ? this.select() : !e && this.selected && this.removeSelect();
			}
			_handleInitialFocusStatus() {
				p(this.dp.focusDate, this.date, this.type) && this.focus();
			}
			get isDisabled() {
				return this.$cell.matches(".-disabled-");
			}
			get isOtherMonth() {
				return this.dp.isOtherMonth(this.date);
			}
			get isOtherDecade() {
				return this.dp.isOtherDecade(this.date);
			}
		}
		function M(e, t, i) {
			return (
				(t = (function (e) {
					var t = (function (e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t);
							if ("object" != typeof s) return s;
							throw new TypeError(
								"@@toPrimitive must return a primitive value."
							);
						}
						return String(e);
					})(e, "string");
					return "symbol" == typeof t ? t : String(t);
				})(t)) in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		let S = {
			[i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
			[i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
			[i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`,
		};
		const T = ".air-datepicker-cell";
		class F {
			constructor(e) {
				let { dp: t, type: s, opts: a } = e;
				M(this, "handleClick", (e) => {
					let t = e.target.closest(T).adpCell;
					if (t.isDisabled) return;
					if (!this.dp.isMinViewReached) return void this.dp.down();
					let i = this.dp._checkIfDateIsSelected(t.date, t.type);
					i
						? this.dp._handleAlreadySelectedDates(i, t.date)
						: this.dp.selectDate(t.date);
				}),
					M(this, "handleDayNameClick", (e) => {
						let t = e.target.getAttribute("data-day-index");
						this.opts.onClickDayName({
							dayIndex: Number(t),
							datepicker: this.dp,
						});
					}),
					M(this, "onChangeCurrentView", (e) => {
						e !== this.type ? this.hide() : (this.show(), this.render());
					}),
					M(this, "onMouseOverCell", (e) => {
						let t = f(e.target, T);
						this.dp.setFocusDate(!!t && t.adpCell.date);
					}),
					M(this, "onMouseOutCell", () => {
						this.dp.setFocusDate(!1);
					}),
					M(this, "onClickBody", (e) => {
						let { onClickDayName: t } = this.opts,
							i = e.target;
						i.closest(T) && this.handleClick(e),
							t &&
								i.closest(".air-datepicker-body--day-name") &&
								this.handleDayNameClick(e);
					}),
					M(this, "onMouseDown", (e) => {
						this.pressed = !0;
						let t = f(e.target, T),
							i = t && t.adpCell;
						p(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0),
							p(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
					}),
					M(this, "onMouseMove", (e) => {
						if (!this.pressed || !this.dp.isMinViewReached) return;
						e.preventDefault();
						let t = f(e.target, T),
							i = t && t.adpCell,
							{ selectedDates: s, rangeDateTo: a, rangeDateFrom: n } = this.dp;
						if (!i || i.isDisabled) return;
						let { date: r } = i;
						if (2 === s.length) {
							if (this.rangeFromFocused && !m(r, a)) {
								let { hours: e, minutes: t } = o(n);
								r.setHours(e),
									r.setMinutes(t),
									(this.dp.rangeDateFrom = r),
									this.dp.replaceDate(n, r);
							}
							if (this.rangeToFocused && !v(r, n)) {
								let { hours: e, minutes: t } = o(a);
								r.setHours(e),
									r.setMinutes(t),
									(this.dp.rangeDateTo = r),
									this.dp.replaceDate(a, r);
							}
						}
					}),
					M(this, "onMouseUp", () => {
						(this.pressed = !1),
							(this.rangeFromFocused = !1),
							(this.rangeToFocused = !1);
					}),
					M(this, "onChangeViewDate", (e, t) => {
						if (!this.isVisible) return;
						let s = c(e),
							a = c(t);
						switch (this.dp.currentView) {
							case i.days:
								if (p(e, t, i.months)) return;
								break;
							case i.months:
								if (p(e, t, i.years)) return;
								break;
							case i.years:
								if (s[0] === a[0] && s[1] === a[1]) return;
						}
						this.render();
					}),
					M(this, "render", () => {
						this.destroyCells(),
							this._generateCells(),
							this.cells.forEach((e) => {
								this.$cells.appendChild(e.render());
							});
					}),
					(this.dp = t),
					(this.type = s),
					(this.opts = a),
					(this.cells = []),
					(this.$el = ""),
					(this.pressed = !1),
					(this.isVisible = !0),
					this.init();
			}
			init() {
				this._buildBaseHtml(),
					this.type === i.days && this.renderDayNames(),
					this.render(),
					this._bindEvents(),
					this._bindDatepickerEvents();
			}
			_bindEvents() {
				let { range: e, dynamicRange: t } = this.opts;
				y(this.$el, "mouseover", this.onMouseOverCell),
					y(this.$el, "mouseout", this.onMouseOutCell),
					y(this.$el, "click", this.onClickBody),
					e &&
						t &&
						(y(this.$el, "mousedown", this.onMouseDown),
						y(this.$el, "mousemove", this.onMouseMove),
						y(window.document, "mouseup", this.onMouseUp));
			}
			_bindDatepickerEvents() {
				this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
			}
			_buildBaseHtml() {
				(this.$el = n({
					className: `air-datepicker-body -${this.type}-`,
					innerHtml: S[this.type],
				})),
					(this.$names = a(".air-datepicker-body--day-names", this.$el)),
					(this.$cells = a(".air-datepicker-body--cells", this.$el));
			}
			_getDayNamesHtml() {
				let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: this.dp.locale.firstDay,
					t = "",
					s = this.dp.isWeekend,
					{ onClickDayName: a } = this.opts,
					n = e,
					r = 0;
				for (; r < 7; ) {
					let e = n % 7;
					(t += `<div class="${u("air-datepicker-body--day-name", {
						[i.cssClassWeekend]: s(e),
						"-clickable-": !!a,
					})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`),
						r++,
						n++;
				}
				return t;
			}
			_getDaysCells() {
				let {
						viewDate: e,
						locale: { firstDay: t },
					} = this.dp,
					i = h(e),
					{ year: s, month: a } = o(e),
					n = new Date(s, a, 1),
					r = new Date(s, a, i),
					l = n.getDay() - t,
					d = 6 - r.getDay() + t;
				(l = l < 0 ? l + 7 : l), (d = d > 6 ? d - 7 : d);
				let c = (function (e, t) {
						let { year: i, month: s, date: a } = o(e);
						return new Date(i, s, a - t);
					})(n, l),
					u = i + l + d,
					p = c.getDate(),
					{ year: m, month: v } = o(c),
					g = 0;
				for (; g < u; ) {
					let e = new Date(m, v, p + g);
					this._generateCell(e), g++;
				}
			}
			_generateCell(e) {
				let { type: t, dp: i, opts: s } = this,
					a = new _({ type: t, dp: i, opts: s, date: e, body: this });
				return this.cells.push(a), a;
			}
			_generateDayCells() {
				this._getDaysCells();
			}
			_generateMonthCells() {
				let { year: e } = this.dp.parsedViewDate,
					t = 0;
				for (; t < 12; )
					this.cells.push(this._generateCell(new Date(e, t))), t++;
			}
			_generateYearCells() {
				let e = c(this.dp.viewDate),
					t = e[0] - 1,
					i = e[1] + 1,
					s = t;
				for (; s <= i; )
					this.cells.push(this._generateCell(new Date(s, 0))), s++;
			}
			renderDayNames() {
				this.$names.innerHTML = this._getDayNamesHtml();
			}
			_generateCells() {
				switch (this.type) {
					case i.days:
						this._generateDayCells();
						break;
					case i.months:
						this._generateMonthCells();
						break;
					case i.years:
						this._generateYearCells();
				}
			}
			show() {
				(this.isVisible = !0), this.$el.classList.remove("-hidden-");
			}
			hide() {
				(this.isVisible = !1), this.$el.classList.add("-hidden-");
			}
			destroyCells() {
				this.cells.forEach((e) => e.destroy()),
					(this.cells = []),
					(this.$cells.innerHTML = "");
			}
			destroy() {
				this.destroyCells(),
					this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
			}
		}
		function V(e, t, i) {
			return (
				(t = (function (e) {
					var t = (function (e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t);
							if ("object" != typeof s) return s;
							throw new TypeError(
								"@@toPrimitive must return a primitive value."
							);
						}
						return String(e);
					})(e, "string");
					return "symbol" == typeof t ? t : String(t);
				})(t)) in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class x {
			constructor(e) {
				let { dp: t, opts: i } = e;
				V(this, "onClickNav", (e) => {
					let t = f(e.target, ".air-datepicker-nav--action");
					if (!t) return;
					let i = t.dataset.action;
					this.dp[i] && this.dp[i]();
				}),
					V(this, "onChangeViewDate", () => {
						this.render(), this._resetNavStatus(), this.handleNavStatus();
					}),
					V(this, "onChangeCurrentView", () => {
						this.render(), this._resetNavStatus(), this.handleNavStatus();
					}),
					V(this, "onClickNavTitle", () => {
						this.dp.isFinalView || this.dp.up();
					}),
					V(this, "update", () => {
						let { prevHtml: e, nextHtml: t } = this.opts;
						(this.$prev.innerHTML = e),
							(this.$next.innerHTML = t),
							this._resetNavStatus(),
							this.render(),
							this.handleNavStatus();
					}),
					V(this, "renderDelay", () => {
						setTimeout(this.render);
					}),
					V(this, "render", () => {
						(this.$title.innerHTML = this._getTitle()),
							(function (e, t) {
								for (let i in t)
									t[i] ? e.classList.add(i) : e.classList.remove(i);
							})(this.$title, { "-disabled-": this.dp.isFinalView });
					}),
					(this.dp = t),
					(this.opts = i),
					this.init();
			}
			init() {
				this._createElement(),
					this._buildBaseHtml(),
					this._defineDOM(),
					this.render(),
					this.handleNavStatus(),
					this._bindEvents(),
					this._bindDatepickerEvents();
			}
			_defineDOM() {
				(this.$title = a(".air-datepicker-nav--title", this.$el)),
					(this.$prev = a('[data-action="prev"]', this.$el)),
					(this.$next = a('[data-action="next"]', this.$el));
			}
			_bindEvents() {
				this.$el.addEventListener("click", this.onClickNav),
					this.$title.addEventListener("click", this.onClickNavTitle);
			}
			_bindDatepickerEvents() {
				this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView),
					this.isNavIsFunction &&
						(this.dp.on(i.eventChangeSelectedDate, this.renderDelay),
						this.dp.opts.timepicker &&
							this.dp.on(i.eventChangeTime, this.render));
			}
			destroy() {
				this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView),
					this.isNavIsFunction &&
						(this.dp.off(i.eventChangeSelectedDate, this.renderDelay),
						this.dp.opts.timepicker &&
							this.dp.off(i.eventChangeTime, this.render));
			}
			_createElement() {
				this.$el = n({ tagName: "nav", className: "air-datepicker-nav" });
			}
			_getTitle() {
				let { dp: e, opts: t } = this,
					i = t.navTitles[e.currentView];
				return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
			}
			handleNavStatus() {
				let { disableNavWhenOutOfRange: e } = this.opts,
					{ minDate: t, maxDate: s } = this.dp;
				if ((!t && !s) || !e) return;
				let { year: a, month: n } = this.dp.parsedViewDate,
					r = !!t && o(t),
					h = !!s && o(s);
				switch (this.dp.currentView) {
					case i.days:
						t && r.month >= n && r.year >= a && this._disableNav("prev"),
							s && h.month <= n && h.year <= a && this._disableNav("next");
						break;
					case i.months:
						t && r.year >= a && this._disableNav("prev"),
							s && h.year <= a && this._disableNav("next");
						break;
					case i.years: {
						let e = c(this.dp.viewDate);
						t && r.year >= e[0] && this._disableNav("prev"),
							s && h.year <= e[1] && this._disableNav("next");
						break;
					}
				}
			}
			_disableNav(e) {
				a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
			}
			_resetNavStatus() {
				!(function (e) {
					for (
						var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1;
						s < t;
						s++
					)
						i[s - 1] = arguments[s];
					e.length
						? e.forEach((e) => {
								e.classList.remove(...i);
						  })
						: e.classList.remove(...i);
				})(
					this.$el.querySelectorAll(".air-datepicker-nav--action"),
					"-disabled-"
				);
			}
			_buildBaseHtml() {
				let { prevHtml: e, nextHtml: t } = this.opts;
                const customPrevYearSVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4417 8.05862C16.4999 8.11667 16.546 8.18564 16.5776 8.26158C16.6091 8.33751 16.6253 8.41891 16.6253 8.50112C16.6253 8.58333 16.6091 8.66473 16.5776 8.74066C16.546 8.81659 16.4999 8.88556 16.4417 8.94362L9.38291 16.0011L16.4417 23.0586C16.559 23.176 16.625 23.3351 16.625 23.5011C16.625 23.6671 16.559 23.8263 16.4417 23.9436C16.3243 24.061 16.1651 24.1269 15.9992 24.1269C15.8332 24.1269 15.674 24.061 15.5567 23.9436L8.05666 16.4436C7.99846 16.3856 7.95228 16.3166 7.92077 16.2407C7.88927 16.1647 7.87305 16.0833 7.87305 16.0011C7.87305 15.9189 7.88927 15.8375 7.92077 15.7616C7.95228 15.6856 7.99846 15.6167 8.05666 15.5586L15.5567 8.05862C15.6147 8.00041 15.6837 7.95423 15.7596 7.92273C15.8356 7.89122 15.917 7.875 15.9992 7.875C16.0814 7.875 16.1628 7.89122 16.2387 7.92273C16.3146 7.95423 16.3836 8.00041 16.4417 8.05862V8.05862Z" fill="#074C31"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4417 8.05862C21.4999 8.11667 21.546 8.18564 21.5776 8.26158C21.6091 8.33751 21.6253 8.41891 21.6253 8.50112C21.6253 8.58333 21.6091 8.66473 21.5776 8.74066C21.546 8.81659 21.4999 8.88556 21.4417 8.94362L14.3829 16.0011L21.4417 23.0586C21.4998 23.1167 21.5459 23.1857 21.5773 23.2616C21.6088 23.3376 21.625 23.4189 21.625 23.5011C21.625 23.5833 21.6088 23.6647 21.5773 23.7406C21.5459 23.8165 21.4998 23.8855 21.4417 23.9436C21.3836 24.0017 21.3146 24.0478 21.2386 24.0793C21.1627 24.1107 21.0813 24.1269 20.9992 24.1269C20.917 24.1269 20.8356 24.1107 20.7597 24.0793C20.6838 24.0478 20.6148 24.0017 20.5567 23.9436L13.0567 16.4436C12.9985 16.3856 12.9523 16.3166 12.9208 16.2407C12.8893 16.1647 12.873 16.0833 12.873 16.0011C12.873 15.9189 12.8893 15.8375 12.9208 15.7616C12.9523 15.6856 12.9985 15.6167 13.0567 15.5586L20.5567 8.05862C20.6147 8.00041 20.6837 7.95423 20.7596 7.92273C20.8356 7.89122 20.917 7.875 20.9992 7.875C21.0814 7.875 21.1628 7.89122 21.2387 7.92273C21.3146 7.95423 21.3836 8.00041 21.4417 8.05862V8.05862Z" fill="#074C31"/>
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="black" stroke-opacity="0.1"/>
                </svg>`
                const customNextYearSVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5567 8.05862C10.6147 8.00041 10.6837 7.95423 10.7596 7.92273C10.8356 7.89122 10.917 7.875 10.9992 7.875C11.0814 7.875 11.1628 7.89122 11.2387 7.92273C11.3146 7.95423 11.3836 8.00041 11.4417 8.05862L18.9417 15.5586C18.9999 15.6167 19.046 15.6856 19.0776 15.7616C19.1091 15.8375 19.1253 15.9189 19.1253 16.0011C19.1253 16.0833 19.1091 16.1647 19.0776 16.2407C19.046 16.3166 18.9999 16.3856 18.9417 16.4436L11.4417 23.9436C11.3243 24.061 11.1651 24.1269 10.9992 24.1269C10.8332 24.1269 10.674 24.061 10.5567 23.9436C10.4393 23.8263 10.3734 23.6671 10.3734 23.5011C10.3734 23.3351 10.4393 23.176 10.5567 23.0586L17.6154 16.0011L10.5567 8.94362C10.4985 8.88556 10.4523 8.81659 10.4208 8.74066C10.3893 8.66473 10.373 8.58333 10.373 8.50112C10.373 8.41891 10.3893 8.33751 10.4208 8.26158C10.4523 8.18564 10.4985 8.11667 10.5567 8.05862Z" fill="#074C31"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5567 8.05862C15.6147 8.00041 15.6837 7.95423 15.7596 7.92273C15.8356 7.89122 15.917 7.875 15.9992 7.875C16.0814 7.875 16.1628 7.89122 16.2387 7.92273C16.3146 7.95423 16.3836 8.00041 16.4417 8.05862L23.9417 15.5586C23.9999 15.6167 24.046 15.6856 24.0776 15.7616C24.1091 15.8375 24.1253 15.9189 24.1253 16.0011C24.1253 16.0833 24.1091 16.1647 24.0776 16.2407C24.046 16.3166 23.9999 16.3856 23.9417 16.4436L16.4417 23.9436C16.3243 24.061 16.1651 24.1269 15.9992 24.1269C15.8332 24.1269 15.674 24.061 15.5567 23.9436C15.4393 23.8263 15.3734 23.6671 15.3734 23.5011C15.3734 23.3351 15.4393 23.176 15.5567 23.0586L22.6154 16.0011L15.5567 8.94362C15.4985 8.88556 15.4523 8.81659 15.4208 8.74066C15.3893 8.66473 15.373 8.58333 15.373 8.50112C15.373 8.41891 15.3893 8.33751 15.4208 8.26158C15.4523 8.18564 15.4985 8.11667 15.5567 8.05862Z" fill="#074C31"/>
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="black" stroke-opacity="0.1"/>
                </svg>`
				this.$el.innerHTML = `<div class="custom-nav-action-datepicker d-flex"><div class="air-datepicker-nav--action prev-year">${customPrevYearSVG}</div><div class="air-datepicker-nav--action" data-action="prev">${e}</div></div><div class="air-datepicker-nav--title"></div><div class="custom-nav-action-datepicker d-flex"><div class="air-datepicker-nav--action" data-action="next">${t}</div><div class="air-datepicker-nav--action next-year">${customNextYearSVG}</div></div>`;
			}
			get isNavIsFunction() {
				let { navTitles: e } = this.opts;
				return Object.keys(e).find((t) => "function" == typeof e[t]);
			}
		}
		var H = {
			today: {
				content: (e) => e.locale.today,
				onClick: (e) => e.setViewDate(new Date()),
			},
			clear: { content: (e) => e.locale.clear, onClick: (e) => e.clear() },
		};
		class E {
			constructor(e) {
				let { dp: t, opts: i } = e;
				(this.dp = t), (this.opts = i), this.init();
			}
			init() {
				this.createElement(), this.render();
			}
			createElement() {
				this.$el = n({ className: "air-datepicker-buttons" });
			}
			destroy() {
				this.$el.parentNode.removeChild(this.$el);
			}
			clearHtml() {
				return (this.$el.innerHTML = ""), this;
			}
			generateButtons() {
				let { buttons: e } = this.opts;
				Array.isArray(e) || (e = [e]),
					e.forEach((e) => {
						let t = e;
						"string" == typeof e && H[e] && (t = H[e]);
						let i = this.createButton(t);
						t.onClick && this.attachEventToButton(i, t.onClick),
							this.$el.appendChild(i);
					});
			}
			attachEventToButton(e, t) {
				e.addEventListener("click", () => {
					t(this.dp);
				});
			}
			createButton(e) {
				let {
					content: t,
					className: i,
					tagName: s = "button",
					attrs: a = {},
				} = e;
				return n({
					tagName: s,
					innerHtml: `<span tabindex='-1'>${
						"function" == typeof t ? t(this.dp) : t
					}</span>`,
					className: u("air-datepicker-button", i),
					attrs: a,
				});
			}
			render() {
				this.generateButtons();
			}
		}
		function L(e, t, i) {
			return (
				(t = (function (e) {
					var t = (function (e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t);
							if ("object" != typeof s) return s;
							throw new TypeError(
								"@@toPrimitive must return a primitive value."
							);
						}
						return String(e);
					})(e, "string");
					return "symbol" == typeof t ? t : String(t);
				})(t)) in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class O {
			constructor() {
				let { opts: e, dp: t } =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				L(this, "toggleTimepickerIsActive", (e) => {
					this.dp.timepickerIsActive = e;
				}),
					L(this, "onChangeSelectedDate", (e) => {
						let { date: t, updateTime: i = !1 } = e;
						t &&
							(this.setMinMaxTime(t),
							this.setCurrentTime(!!i && t),
							this.addTimeToDate(t));
					}),
					L(this, "onChangeLastSelectedDate", (e) => {
						e && (this.setTime(e), this.render());
					}),
					L(this, "onChangeInputRange", (e) => {
						let t = e.target;
						(this[t.getAttribute("name")] = t.value),
							this.updateText(),
							this.dp.trigger(i.eventChangeTime, {
								hours: this.hours,
								minutes: this.minutes,
							});
					}),
					L(this, "onMouseEnterLeave", (e) => {
						let t = e.target.getAttribute("name"),
							i = this.$minutesText;
						"hours" === t && (i = this.$hoursText),
							i.classList.toggle("-focus-");
					}),
					L(this, "onFocus", () => {
						this.toggleTimepickerIsActive(!0);
					}),
					L(this, "onBlur", () => {
						this.toggleTimepickerIsActive(!1);
					}),
					(this.opts = e),
					(this.dp = t);
				let { timeFormat: s } = this.dp.locale;
				s && (s.match(C("h")) || s.match(C("hh"))) && (this.ampm = !0),
					this.init();
			}
			init() {
				this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
					this.createElement(),
					this.buildHtml(),
					this.defineDOM(),
					this.render(),
					this.bindDatepickerEvents(),
					this.bindDOMEvents();
			}
			bindDatepickerEvents() {
				this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
					this.dp.on(
						i.eventChangeLastSelectedDate,
						this.onChangeLastSelectedDate
					);
			}
			bindDOMEvents() {
				let e = "input";
				navigator.userAgent.match(/trident/gi) && (e = "change"),
					y(this.$ranges, e, this.onChangeInputRange),
					y(this.$ranges, "mouseenter", this.onMouseEnterLeave),
					y(this.$ranges, "mouseleave", this.onMouseEnterLeave),
					y(this.$ranges, "focus", this.onFocus),
					y(this.$ranges, "mousedown", this.onFocus),
					y(this.$ranges, "blur", this.onBlur);
			}
			createElement() {
				this.$el = n({
					className: u("air-datepicker-time", { "-am-pm-": this.dp.ampm }),
				});
			}
			destroy() {
				this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
					this.dp.off(
						i.eventChangeLastSelectedDate,
						this.onChangeLastSelectedDate
					),
					this.$el.parentNode.removeChild(this.$el);
			}
			buildHtml() {
				let {
					ampm: e,
					hours: t,
					displayHours: i,
					minutes: s,
					minHours: a,
					minMinutes: n,
					maxHours: r,
					maxMinutes: h,
					dayPeriod: o,
					opts: { hoursStep: l, minutesStep: c },
				} = this;
				this.$el.innerHTML =
					`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(
						i
					)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(
						s
					)}</span>   ` +
					(e
						? `<span class='air-datepicker-time--current-ampm'>${o}</span>`
						: "") +
					'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
					`      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` +
					`      <input type="range" name="minutes" value="${s}" min="${n}" max="${h}" step="${c}"/>   </div></div>`;
			}
			defineDOM() {
				let e = (e) => a(e, this.$el);
				(this.$ranges = this.$el.querySelectorAll('[type="range"]')),
					(this.$hours = e('[name="hours"]')),
					(this.$minutes = e('[name="minutes"]')),
					(this.$hoursText = e(".air-datepicker-time--current-hours")),
					(this.$minutesText = e(".air-datepicker-time--current-minutes")),
					(this.$ampm = e(".air-datepicker-time--current-ampm"));
			}
			setTime(e) {
				this.setMinMaxTime(e), this.setCurrentTime(e);
			}
			addTimeToDate(e) {
				e && (e.setHours(this.hours), e.setMinutes(this.minutes));
			}
			setMinMaxTime(e) {
				if ((this.setMinMaxTimeFromOptions(), e)) {
					let { minDate: t, maxDate: i } = this.dp;
					t && p(e, t) && this.setMinTimeFromMinDate(t),
						i && p(e, i) && this.setMaxTimeFromMaxDate(i);
				}
			}
			setCurrentTime(e) {
				let { hours: t, minutes: i } = e ? o(e) : this;
				(this.hours = w(t, this.minHours, this.maxHours)),
					(this.minutes = w(i, this.minMinutes, this.maxMinutes));
			}
			setMinMaxTimeFromOptions() {
				let {
					minHours: e,
					minMinutes: t,
					maxHours: i,
					maxMinutes: s,
				} = this.opts;
				(this.minHours = w(e, 0, 23)),
					(this.minMinutes = w(t, 0, 59)),
					(this.maxHours = w(i, 0, 23)),
					(this.maxMinutes = w(s, 0, 59));
			}
			setMinTimeFromMinDate(e) {
				let { lastSelectedDate: t } = this.dp;
				(this.minHours = e.getHours()),
					t && t.getHours() > e.getHours()
						? (this.minMinutes = this.opts.minMinutes)
						: (this.minMinutes = e.getMinutes());
			}
			setMaxTimeFromMaxDate(e) {
				let { lastSelectedDate: t } = this.dp;
				(this.maxHours = e.getHours()),
					t && t.getHours() < e.getHours()
						? (this.maxMinutes = this.opts.maxMinutes)
						: (this.maxMinutes = e.getMinutes());
			}
			updateSliders() {
				(r(this.$hours, { min: this.minHours, max: this.maxHours }).value =
					this.hours),
					(r(this.$minutes, {
						min: this.minMinutes,
						max: this.maxMinutes,
					}).value = this.minutes);
			}
			updateText() {
				(this.$hoursText.innerHTML = d(this.displayHours)),
					(this.$minutesText.innerHTML = d(this.minutes)),
					this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
			}
			set hours(e) {
				this._hours = e;
				let { hours: t, dayPeriod: i } = l(e);
				(this.displayHours = this.ampm ? t : e), (this.dayPeriod = i);
			}
			get hours() {
				return this._hours;
			}
			render() {
				this.updateSliders(), this.updateText();
			}
		}
		function A(e, t, i) {
			return (
				(t = (function (e) {
					var t = (function (e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t);
							if ("object" != typeof s) return s;
							throw new TypeError(
								"@@toPrimitive must return a primitive value."
							);
						}
						return String(e);
					})(e, "string");
					return "symbol" == typeof t ? t : String(t);
				})(t)) in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class N {
			constructor(e) {
				let { dp: t, opts: i } = e;
				A(this, "pressedKeys", new Set()),
					A(
						this,
						"hotKeys",
						new Map([
							[
								[
									["Control", "ArrowRight"],
									["Control", "ArrowUp"],
								],
								(e) => e.month++,
							],
							[
								[
									["Control", "ArrowLeft"],
									["Control", "ArrowDown"],
								],
								(e) => e.month--,
							],
							[
								[
									["Shift", "ArrowRight"],
									["Shift", "ArrowUp"],
								],
								(e) => e.year++,
							],
							[
								[
									["Shift", "ArrowLeft"],
									["Shift", "ArrowDown"],
								],
								(e) => e.year--,
							],
							[
								[
									["Alt", "ArrowRight"],
									["Alt", "ArrowUp"],
								],
								(e) => (e.year += 10),
							],
							[
								[
									["Alt", "ArrowLeft"],
									["Alt", "ArrowDown"],
								],
								(e) => (e.year -= 10),
							],
							[["Control", "Shift", "ArrowUp"], (e, t) => t.up()],
						])
					),
					A(this, "handleHotKey", (e) => {
						let t = this.hotKeys.get(e),
							i = o(this.getInitialFocusDate());
						t(i, this.dp);
						let { year: s, month: a, date: n } = i,
							r = h(new Date(s, a));
						r < n && (n = r);
						let l = this.dp.getClampedDate(new Date(s, a, n));
						this.dp.setFocusDate(l, { viewDateTransition: !0 });
					}),
					A(this, "isHotKeyPressed", () => {
						let e = !1,
							t = this.pressedKeys.size,
							i = (e) => this.pressedKeys.has(e);
						for (let [s] of this.hotKeys) {
							if (e) break;
							if (Array.isArray(s[0]))
								s.forEach((a) => {
									e || t !== a.length || (e = a.every(i) && s);
								});
							else {
								if (t !== s.length) continue;
								e = s.every(i) && s;
							}
						}
						return e;
					}),
					A(this, "isArrow", (e) => e >= 37 && e <= 40),
					A(this, "onKeyDown", (e) => {
						let { key: t, which: i } = e,
							{
								dp: s,
								dp: { focusDate: a },
								opts: n,
							} = this;
						this.registerKey(t);
						let r = this.isHotKeyPressed();
						if (r) return e.preventDefault(), void this.handleHotKey(r);
						if (this.isArrow(i))
							return e.preventDefault(), void this.focusNextCell(t);
						if ("Enter" === t) {
							if (s.currentView !== n.minView) return void s.down();
							if (a) {
								let e = s._checkIfDateIsSelected(a);
								return void (e
									? s._handleAlreadySelectedDates(e, a)
									: s.selectDate(a));
							}
						}
						"Escape" === t && this.dp.hide();
					}),
					A(this, "onKeyUp", (e) => {
						this.removeKey(e.key);
					}),
					(this.dp = t),
					(this.opts = i),
					this.init();
			}
			init() {
				this.bindKeyboardEvents();
			}
			bindKeyboardEvents() {
				let { $el: e } = this.dp;
				e.addEventListener("keydown", this.onKeyDown),
					e.addEventListener("keyup", this.onKeyUp);
			}
			destroy() {
				let { $el: e } = this.dp;
				e.removeEventListener("keydown", this.onKeyDown),
					e.removeEventListener("keyup", this.onKeyUp),
					(this.hotKeys = null),
					(this.pressedKeys = null);
			}
			getInitialFocusDate() {
				let {
						focusDate: e,
						currentView: t,
						selectedDates: s,
						parsedViewDate: { year: a, month: n },
					} = this.dp,
					r = e || s[s.length - 1];
				if (!r)
					switch (t) {
						case i.days:
							r = new Date(a, n, new Date().getDate());
							break;
						case i.months:
							r = new Date(a, n, 1);
							break;
						case i.years:
							r = new Date(a, 0, 1);
					}
				return r;
			}
			focusNextCell(e) {
				let t = this.getInitialFocusDate(),
					{ currentView: s } = this.dp,
					{ days: a, months: n, years: r } = i,
					h = o(t),
					l = h.year,
					d = h.month,
					c = h.date;
				switch (e) {
					case "ArrowLeft":
						s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
						break;
					case "ArrowUp":
						s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
						break;
					case "ArrowRight":
						s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
						break;
					case "ArrowDown":
						s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
				}
				let u = this.dp.getClampedDate(new Date(l, d, c));
				this.dp.setFocusDate(u, { viewDateTransition: !0 });
			}
			registerKey(e) {
				this.pressedKeys.add(e);
			}
			removeKey(e) {
				this.pressedKeys.delete(e);
			}
		}
		let I = {
			on(e, t) {
				this.__events || (this.__events = {}),
					this.__events[e]
						? this.__events[e].push(t)
						: (this.__events[e] = [t]);
			},
			off(e, t) {
				this.__events &&
					this.__events[e] &&
					(this.__events[e] = this.__events[e].filter((e) => e !== t));
			},
			removeAllEvents() {
				this.__events = {};
			},
			trigger(e) {
				for (
					var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1;
					s < t;
					s++
				)
					i[s - 1] = arguments[s];
				this.__events &&
					this.__events[e] &&
					this.__events[e].forEach((e) => {
						e(...i);
					});
			},
		};
		function P(e, t, i) {
			return (
				(t = (function (e) {
					var t = (function (e, t) {
						if ("object" != typeof e || null === e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var s = i.call(e, t);
							if ("object" != typeof s) return s;
							throw new TypeError(
								"@@toPrimitive must return a primitive value."
							);
						}
						return String(e);
					})(e, "string");
					return "symbol" == typeof t ? t : String(t);
				})(t)) in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		let j = "",
			R = "",
			B = !1;
		class K {
			static buildGlobalContainer(e) {
				(B = !0), (j = n({ className: e, id: e })), a("body").appendChild(j);
			}
			constructor(e, t) {
				var r = this;
				if (
					(P(this, "viewIndexes", [i.days, i.months, i.years]),
					P(this, "next", () => {
						let { year: e, month: t } = this.parsedViewDate;
						switch (this.currentView) {
							case i.days:
								this.setViewDate(new Date(e, t + 1, 1));
								break;
							case i.months:
								this.setViewDate(new Date(e + 1, t, 1));
								break;
							case i.years:
								this.setViewDate(new Date(e + 10, 0, 1));
						}
					}),
					P(this, "prev", () => {
						let { year: e, month: t } = this.parsedViewDate;
						switch (this.currentView) {
							case i.days:
								this.setViewDate(new Date(e, t - 1, 1));
								break;
							case i.months:
								this.setViewDate(new Date(e - 1, t, 1));
								break;
							case i.years:
								this.setViewDate(new Date(e - 10, 0, 1));
						}
					}),
					P(this, "_finishHide", () => {
						(this.hideAnimation = !1),
							this._destroyComponents(),
							this.$container.removeChild(this.$datepicker);
					}),
					P(this, "setPosition", function (e) {
						let t =
							arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if ("function" == typeof (e = e || r.opts.position))
							return void (r.customHide = e({
								$datepicker: r.$datepicker,
								$target: r.$el,
								$pointer: r.$pointer,
								isViewChange: t,
								done: r._finishHide,
							}));
						let i,
							s,
							{ isMobile: a } = r.opts,
							n = r.$el.getBoundingClientRect(),
							h = r.$el.getBoundingClientRect(),
							o = r.$datepicker.offsetParent,
							l = r.$el.offsetParent,
							d = r.$datepicker.getBoundingClientRect(),
							c = e.split(" "),
							u = window.scrollY,
							p = window.scrollX,
							m = r.opts.offset,
							v = c[0],
							g = c[1];
						if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";
						else {
							if (
								(o === l &&
									o !== document.body &&
									((h = {
										top: r.$el.offsetTop,
										left: r.$el.offsetLeft,
										width: n.width,
										height: r.$el.offsetHeight,
									}),
									(u = 0),
									(p = 0)),
								o !== l && o !== document.body)
							) {
								let e = o.getBoundingClientRect();
								(h = {
									top: n.top - e.top,
									left: n.left - e.left,
									width: n.width,
									height: n.height,
								}),
									(u = 0),
									(p = 0);
							}
							switch (v) {
								case "top":
									i = h.top - d.height - m;
									break;
								case "right":
									s = h.left + h.width + m;
									break;
								case "bottom":
									i = h.top + h.height + m;
									break;
								case "left":
									s = h.left - d.width - m;
							}
							switch (g) {
								case "top":
									i = h.top;
									break;
								case "right":
									s = h.left + h.width - d.width;
									break;
								case "bottom":
									i = h.top + h.height - d.height;
									break;
								case "left":
									s = h.left;
									break;
								case "center":
									/left|right/.test(v)
										? (i = h.top + h.height / 2 - d.height / 2)
										: (s = h.left + h.width / 2 - d.width / 2);
							}
							r.$datepicker.style.cssText = `left: ${s + p}px; top: ${i + u}px`;
						}
					}),
					P(this, "_setInputValue", () => {
						let {
								opts: e,
								$altField: t,
								locale: { dateFormat: i },
							} = this,
							{ altFieldDateFormat: s, altField: a } = e;
						a && t && (t.value = this._getInputValue(s)),
							(this.$el.value = this._getInputValue(i));
					}),
					P(this, "_getInputValue", (e) => {
						let { selectedDates: t, opts: i } = this,
							{ multipleDates: s, multipleDatesSeparator: a } = i;
						if (!t.length) return "";
						let n = "function" == typeof e,
							r = n ? e(s ? t : t[0]) : t.map((t) => this.formatDate(t, e));
						return (r = n ? r : r.join(a)), r;
					}),
					P(this, "_checkIfDateIsSelected", function (e) {
						let t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: i.days,
							s = !1;
						return (
							r.selectedDates.some((i) => {
								let a = p(e, i, t);
								return (s = a && i), a;
							}),
							s
						);
					}),
					P(this, "_scheduleCallAfterTransition", (e) => {
						this._cancelScheduledCall(),
							e && e(!1),
							(this._onTransitionEnd = () => {
								e && e(!0);
							}),
							this.$datepicker.addEventListener(
								"transitionend",
								this._onTransitionEnd,
								{ once: !0 }
							);
					}),
					P(this, "_cancelScheduledCall", () => {
						this.$datepicker.removeEventListener(
							"transitionend",
							this._onTransitionEnd
						);
					}),
					P(this, "setViewDate", (e) => {
						if (!((e = k(e)) instanceof Date)) return;
						if (p(e, this.viewDate)) return;
						let t = this.viewDate;
						this.viewDate = e;
						let { onChangeViewDate: s } = this.opts;
						if (s) {
							let { month: e, year: t } = this.parsedViewDate;
							s({ month: e, year: t, decade: this.curDecade });
						}
						this.trigger(i.eventChangeViewDate, e, t);
					}),
					P(this, "setFocusDate", function (e) {
						let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						(!e || (e = k(e)) instanceof Date) &&
							((r.focusDate = e),
							r.opts.range && e && r._handleRangeOnFocus(),
							r.trigger(i.eventChangeFocusDate, e, t));
					}),
					P(this, "setCurrentView", (e) => {
						if (this.viewIndexes.includes(e)) {
							if (
								((this.currentView = e),
								this.elIsInput && this.visible && this.setPosition(void 0, !0),
								this.trigger(i.eventChangeCurrentView, e),
								!this.views[e])
							) {
								let t = (this.views[e] = new F({
									dp: this,
									opts: this.opts,
									type: e,
								}));
								this.shouldUpdateDOM && this.$content.appendChild(t.$el);
							}
							this.opts.onChangeView && this.opts.onChangeView(e);
						}
					}),
					P(this, "_updateLastSelectedDate", (e) => {
						(this.lastSelectedDate = e),
							this.trigger(i.eventChangeLastSelectedDate, e);
					}),
					P(this, "destroy", () => {
						let { showEvent: e, isMobile: t } = this.opts,
							i = this.$datepicker.parentNode;
						i && i.removeChild(this.$datepicker),
							this.$el.removeEventListener(e, this._onFocus),
							this.$el.removeEventListener("blur", this._onBlur),
							window.removeEventListener("resize", this._onResize),
							t && this._removeMobileAttributes(),
							this.keyboardNav && this.keyboardNav.destroy(),
							(this.views = null),
							(this.nav = null),
							(this.$datepicker = null),
							(this.opts = null),
							(this.$customContainer = null),
							(this.viewDate = null),
							(this.focusDate = null),
							(this.selectedDates = null),
							(this.rangeDateFrom = null),
							(this.rangeDateTo = null);
					}),
					P(this, "update", (e) => {
						let t = b({}, this.opts);
						b(this.opts, e);
						let {
								timepicker: s,
								buttons: a,
								range: n,
								selectedDates: r,
								isMobile: h,
							} = this.opts,
							o = this.visible || this.treatAsInline;
						this._createMinMaxDates(),
							this._limitViewDateByMaxMinDates(),
							this._handleLocale(),
							!t.selectedDates && r && this.selectDate(r),
							e.view && this.setCurrentView(e.view),
							this._setInputValue(),
							t.range && !n
								? ((this.rangeDateTo = !1), (this.rangeDateFrom = !1))
								: !t.range &&
								  n &&
								  this.selectedDates.length &&
								  ((this.rangeDateFrom = this.selectedDates[0]),
								  (this.rangeDateTo = this.selectedDates[1])),
							t.timepicker && !s
								? (o && this.timepicker.destroy(),
								  (this.timepicker = !1),
								  this.$timepicker.parentNode.removeChild(this.$timepicker))
								: !t.timepicker && s && this._addTimepicker(),
							!t.buttons && a
								? this._addButtons()
								: t.buttons && !a
								? (this.buttons.destroy(),
								  this.$buttons.parentNode.removeChild(this.$buttons))
								: o && t.buttons && a && this.buttons.clearHtml().render(),
							!t.isMobile && h
								? (this.treatAsInline || R || this._createMobileOverlay(),
								  this._addMobileAttributes(),
								  this.visible && this._showMobileOverlay())
								: t.isMobile &&
								  !h &&
								  (this._removeMobileAttributes(),
								  this.visible &&
										(R.classList.remove("-active-"),
										"function" != typeof this.opts.position &&
											this.setPosition())),
							o &&
								(this.nav.update(),
								this.views[this.currentView].render(),
								this.currentView === i.days &&
									this.views[this.currentView].renderDayNames());
					}),
					P(this, "isOtherMonth", (e) => {
						let { month: t } = o(e);
						return t !== this.parsedViewDate.month;
					}),
					P(this, "isOtherYear", (e) => {
						let { year: t } = o(e);
						return t !== this.parsedViewDate.year;
					}),
					P(this, "isOtherDecade", (e) => {
						let { year: t } = o(e),
							[i, s] = c(this.viewDate);
						return t < i || t > s;
					}),
					P(this, "_onChangeSelectedDate", (e) => {
						let { silent: t } = e;
						setTimeout(() => {
							this._setInputValue(),
								this.opts.onSelect && !t && this._triggerOnSelect();
						});
					}),
					P(this, "_onChangeFocusedDate", function (e) {
						let { viewDateTransition: t } =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						if (!e) return;
						let i = !1;
						t &&
							(i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)),
							i && r.setViewDate(e);
					}),
					P(this, "_onChangeTime", (e) => {
						let { hours: t, minutes: i } = e,
							s = new Date(),
							{
								lastSelectedDate: a,
								opts: { onSelect: n },
							} = this,
							r = a;
						a || (r = s);
						let h = this.getCell(r, this.currentViewSingular),
							o = h && h.adpCell;
						(o && o.isDisabled) ||
							(r.setHours(t),
							r.setMinutes(i),
							a
								? (this._setInputValue(), n && this._triggerOnSelect())
								: this.selectDate(r));
					}),
					P(this, "_onFocus", (e) => {
						this.visible || this.show();
					}),
					P(this, "_onBlur", (e) => {
						this.inFocus || !this.visible || this.opts.isMobile || this.hide();
					}),
					P(this, "_onMouseDown", (e) => {
						this.inFocus = !0;
					}),
					P(this, "_onMouseUp", (e) => {
						(this.inFocus = !1), this.$el.focus();
					}),
					P(this, "_onResize", () => {
						this.visible &&
							"function" != typeof this.opts.position &&
							this.setPosition();
					}),
					P(this, "_onClickOverlay", () => {
						this.visible && this.hide();
					}),
					P(this, "isWeekend", (e) => this.opts.weekends.includes(e)),
					P(this, "getClampedDate", (e) => {
						let { minDate: t, maxDate: i } = this,
							s = e;
						return i && m(e, i) ? (s = i) : t && v(e, t) && (s = t), s;
					}),
					(this.$el = a(e)),
					!this.$el)
				)
					return;
				(this.$datepicker = n({ className: "air-datepicker" })),
					(this.opts = b({}, s, t)),
					(this.$customContainer =
						!!this.opts.container && a(this.opts.container)),
					(this.$altField = a(this.opts.altField || !1));
				let { view: h, startDate: l } = this.opts;
				l || (this.opts.startDate = new Date()),
					"INPUT" === this.$el.nodeName && (this.elIsInput = !0),
					(this.inited = !1),
					(this.visible = !1),
					(this.viewDate = k(this.opts.startDate)),
					(this.focusDate = !1),
					(this.initialReadonly = this.$el.getAttribute("readonly")),
					(this.customHide = !1),
					(this.currentView = h),
					(this.selectedDates = []),
					(this.views = {}),
					(this.keys = []),
					(this.rangeDateFrom = ""),
					(this.rangeDateTo = ""),
					(this.timepickerIsActive = !1),
					(this.treatAsInline = this.opts.inline || !this.elIsInput),
					this.init();
			}
			init() {
				let {
						opts: e,
						treatAsInline: t,
						opts: {
							inline: i,
							isMobile: s,
							selectedDates: n,
							keyboardNav: r,
							onlyTimepicker: h,
						},
					} = this,
					o = a("body");
				(!B || (B && j && !o.contains(j))) &&
					!i &&
					this.elIsInput &&
					!this.$customContainer &&
					K.buildGlobalContainer(K.defaultGlobalContainerId),
					!s || R || t || this._createMobileOverlay(),
					this._handleLocale(),
					this._bindSubEvents(),
					this._createMinMaxDates(),
					this._limitViewDateByMaxMinDates(),
					this.elIsInput &&
						(i || this._bindEvents(),
						r && !h && (this.keyboardNav = new N({ dp: this, opts: e }))),
					n && this.selectDate(n, { silent: !0 }),
					this.opts.visible && !t && this.show(),
					s && !t && this.$el.setAttribute("readonly", !0),
					t && this._createComponents();
			}
			_createMobileOverlay() {
				(R = n({ className: "air-datepicker-overlay" })), j.appendChild(R);
			}
			_createComponents() {
				let {
					opts: e,
					treatAsInline: t,
					opts: {
						inline: i,
						buttons: s,
						timepicker: a,
						position: n,
						classes: r,
						onlyTimepicker: h,
						isMobile: o,
					},
				} = this;
				this._buildBaseHtml(),
					this.elIsInput && (i || this._setPositionClasses(n)),
					(!i && this.elIsInput) || this.$datepicker.classList.add("-inline-"),
					r && this.$datepicker.classList.add(...r.split(" ")),
					h && this.$datepicker.classList.add("-only-timepicker-"),
					o && !t && this._addMobileAttributes(),
					(this.views[this.currentView] = new F({
						dp: this,
						type: this.currentView,
						opts: e,
					})),
					(this.nav = new x({ dp: this, opts: e })),
					a && this._addTimepicker(),
					s && this._addButtons(),
					this.$content.appendChild(this.views[this.currentView].$el),
					this.$nav.appendChild(this.nav.$el);
			}
			_destroyComponents() {
				for (let e in this.views) this.views[e].destroy();
				(this.views = {}),
					this.nav.destroy(),
					this.timepicker && this.timepicker.destroy();
			}
			_addMobileAttributes() {
				R.addEventListener("click", this._onClickOverlay),
					this.$datepicker.classList.add("-is-mobile-"),
					this.$el.setAttribute("readonly", !0);
			}
			_removeMobileAttributes() {
				R.removeEventListener("click", this._onClickOverlay),
					this.$datepicker.classList.remove("-is-mobile-"),
					this.initialReadonly ||
						"" === this.initialReadonly ||
						this.$el.removeAttribute("readonly");
			}
			_createMinMaxDates() {
				let { minDate: e, maxDate: t } = this.opts;
				(this.minDate = !!e && k(e)), (this.maxDate = !!t && k(t));
			}
			_addTimepicker() {
				(this.$timepicker = n({ className: "air-datepicker--time" })),
					this.$datepicker.appendChild(this.$timepicker),
					(this.timepicker = new O({ dp: this, opts: this.opts })),
					this.$timepicker.appendChild(this.timepicker.$el);
			}
			_addButtons() {
				(this.$buttons = n({ className: "air-datepicker--buttons" })),
					this.$datepicker.appendChild(this.$buttons),
					(this.buttons = new E({ dp: this, opts: this.opts })),
					this.$buttons.appendChild(this.buttons.$el);
			}
			_bindSubEvents() {
				this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate),
					this.on(i.eventChangeFocusDate, this._onChangeFocusedDate),
					this.on(i.eventChangeTime, this._onChangeTime);
			}
			_buildBaseHtml() {
				let { inline: e } = this.opts;
				var t, i;
				this.elIsInput
					? e
						? ((t = this.$datepicker),
						  (i = this.$el).parentNode.insertBefore(t, i.nextSibling))
						: this.$container.appendChild(this.$datepicker)
					: this.$el.appendChild(this.$datepicker),
					(this.$datepicker.innerHTML =
						'<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
					(this.$content = a(".air-datepicker--content", this.$datepicker)),
					(this.$pointer = a(".air-datepicker--pointer", this.$datepicker)),
					(this.$nav = a(".air-datepicker--navigation", this.$datepicker));
			}
			_handleLocale() {
				let {
					locale: e,
					dateFormat: t,
					firstDay: i,
					timepicker: s,
					onlyTimepicker: a,
					timeFormat: n,
					dateTimeSeparator: r,
				} = this.opts;
				var h;
				(this.locale = ((h = e), JSON.parse(JSON.stringify(h)))),
					t && (this.locale.dateFormat = t),
					void 0 !== n && "" !== n && (this.locale.timeFormat = n);
				let { timeFormat: o } = this.locale;
				if (
					("" !== i && (this.locale.firstDay = i), s && "function" != typeof t)
				) {
					let e = o ? r : "";
					this.locale.dateFormat = [this.locale.dateFormat, o || ""].join(e);
				}
				a &&
					"function" != typeof t &&
					(this.locale.dateFormat = this.locale.timeFormat);
			}
			_setPositionClasses(e) {
				if ("function" == typeof e)
					return void this.$datepicker.classList.add("-custom-position-");
				let t = (e = e.split(" "))[0],
					i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
				this.$datepicker.classList.add(...i.split(" "));
			}
			_bindEvents() {
				this.$el.addEventListener(this.opts.showEvent, this._onFocus),
					this.$el.addEventListener("blur", this._onBlur),
					this.$datepicker.addEventListener("mousedown", this._onMouseDown),
					this.$datepicker.addEventListener("mouseup", this._onMouseUp),
					window.addEventListener("resize", this._onResize);
			}
			_limitViewDateByMaxMinDates() {
				let { viewDate: e, minDate: t, maxDate: i } = this;
				i && m(e, i) && this.setViewDate(i),
					t && v(e, t) && this.setViewDate(t);
			}
			formatDate() {
				let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: this.viewDate,
					t = arguments.length > 1 ? arguments[1] : void 0;
				if (((e = k(e)), !(e instanceof Date))) return;
				let i = t,
					s = this.locale,
					a = o(e),
					n = a.dayPeriod,
					r = c(e),
					h = K.replacer,
					l = {
						T: e.getTime(),
						m: a.minutes,
						mm: a.fullMinutes,
						h: a.hours12,
						hh: a.fullHours12,
						H: a.hours,
						HH: a.fullHours,
						aa: n,
						AA: n.toUpperCase(),
						E: s.daysShort[a.day],
						EEEE: s.days[a.day],
						d: a.date,
						dd: a.fullDate,
						M: a.month + 1,
						MM: a.fullMonth,
						MMM: s.monthsShort[a.month],
						MMMM: s.months[a.month],
						yy: a.year.toString().slice(-2),
						yyyy: a.year,
						yyyy1: r[0],
						yyyy2: r[1],
					};
				for (let [e, t] of Object.entries(l)) i = h(i, C(e), t);
				return i;
			}
			down(e) {
				this._handleUpDownActions(e, "down");
			}
			up(e) {
				this._handleUpDownActions(e, "up");
			}
			selectDate(e) {
				let t,
					s =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					{ currentView: a, parsedViewDate: n, selectedDates: r } = this,
					{ updateTime: h } = s,
					{
						moveToOtherMonthsOnSelect: o,
						moveToOtherYearsOnSelect: l,
						multipleDates: d,
						range: c,
						autoClose: u,
					} = this.opts,
					p = r.length;
				if (Array.isArray(e))
					return (
						e.forEach((e) => {
							this.selectDate(e, s);
						}),
						new Promise((e) => {
							setTimeout(e);
						})
					);
				if ((e = k(e)) instanceof Date) {
					if (
						(a === i.days &&
							e.getMonth() !== n.month &&
							o &&
							(t = new Date(e.getFullYear(), e.getMonth(), 1)),
						a === i.years &&
							e.getFullYear() !== n.year &&
							l &&
							(t = new Date(e.getFullYear(), 0, 1)),
						t && this.setViewDate(t),
						d && !c)
					) {
						if (p === d) return;
						this._checkIfDateIsSelected(e) || r.push(e);
					} else if (c)
						switch (p) {
							case 1:
								r.push(e),
									this.rangeDateTo || (this.rangeDateTo = e),
									m(this.rangeDateFrom, this.rangeDateTo) &&
										((this.rangeDateTo = this.rangeDateFrom),
										(this.rangeDateFrom = e)),
									(this.selectedDates = [this.rangeDateFrom, this.rangeDateTo]);
								break;
							case 2:
								(this.selectedDates = [e]),
									(this.rangeDateFrom = e),
									(this.rangeDateTo = "");
								break;
							default:
								(this.selectedDates = [e]), (this.rangeDateFrom = e);
						}
					else this.selectedDates = [e];
					return (
						this.trigger(i.eventChangeSelectedDate, {
							action: i.actionSelectDate,
							silent: null == s ? void 0 : s.silent,
							date: e,
							updateTime: h,
						}),
						this._updateLastSelectedDate(e),
						u &&
							!this.timepickerIsActive &&
							this.visible &&
							(d || c ? c && 1 === p && this.hide() : this.hide()),
						new Promise((e) => {
							setTimeout(e);
						})
					);
				}
			}
			unselectDate(e) {
				let t = this.selectedDates,
					s = this;
				if ((e = k(e)) instanceof Date)
					return t.some((a, n) => {
						if (p(a, e))
							return (
								t.splice(n, 1),
								s.selectedDates.length
									? s._updateLastSelectedDate(
											s.selectedDates[s.selectedDates.length - 1]
									  )
									: ((s.rangeDateFrom = ""),
									  (s.rangeDateTo = ""),
									  s._updateLastSelectedDate(!1)),
								this.trigger(i.eventChangeSelectedDate, {
									action: i.actionUnselectDate,
									date: e,
								}),
								!0
							);
					});
			}
			replaceDate(e, t) {
				let s = this.selectedDates.find((t) => p(t, e, this.currentView)),
					a = this.selectedDates.indexOf(s);
				a < 0 ||
					p(this.selectedDates[a], t, this.currentView) ||
					((this.selectedDates[a] = t),
					this.trigger(i.eventChangeSelectedDate, {
						action: i.actionSelectDate,
						date: t,
						updateTime: !0,
					}),
					this._updateLastSelectedDate(t));
			}
			clear() {
				let e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return (
					(this.selectedDates = []),
					(this.rangeDateFrom = !1),
					(this.rangeDateTo = !1),
					this.trigger(i.eventChangeSelectedDate, {
						action: i.actionUnselectDate,
						silent: e.silent,
					}),
					new Promise((e) => {
						setTimeout(e);
					})
				);
			}
			show() {
				let { onShow: e, isMobile: t } = this.opts;
				this._cancelScheduledCall(),
					this.visible || this.hideAnimation || this._createComponents(),
					this.setPosition(this.opts.position),
					this.$datepicker.classList.add("-active-"),
					(this.visible = !0),
					e && this._scheduleCallAfterTransition(e),
					t && this._showMobileOverlay();
			}
			hide() {
				let { onHide: e, isMobile: t } = this.opts,
					i = this._hasTransition();
				(this.visible = !1),
					(this.hideAnimation = !0),
					this.$datepicker.classList.remove("-active-"),
					this.customHide && this.customHide(),
					this.elIsInput && this.$el.blur(),
					this._scheduleCallAfterTransition((t) => {
						!this.customHide && ((t && i) || (!t && !i)) && this._finishHide(),
							e && e(t);
					}),
					t && R.classList.remove("-active-");
			}
			_triggerOnSelect() {
				let e = [],
					t = [],
					{
						selectedDates: i,
						locale: s,
						opts: { onSelect: a, multipleDates: n, range: r },
					} = this,
					h = n || r,
					o = "function" == typeof s.dateFormat;
				i.length &&
					((e = i.map(g)),
					(t = o
						? n
							? s.dateFormat(e)
							: e.map((e) => s.dateFormat(e))
						: e.map((e) => this.formatDate(e, s.dateFormat)))),
					a({
						date: h ? e : e[0],
						formattedDate: h ? t : t[0],
						datepicker: this,
					});
			}
			_handleAlreadySelectedDates(e, t) {
				let { range: i, toggleSelected: s } = this.opts;
				i
					? s
						? this.unselectDate(t)
						: 2 !== this.selectedDates.length && this.selectDate(t)
					: s && this.unselectDate(t),
					s || this._updateLastSelectedDate(e);
			}
			_handleUpDownActions(e, t) {
				if (!((e = k(e || this.focusDate || this.viewDate)) instanceof Date))
					return;
				let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
				i > 2 && (i = 2),
					i < 0 && (i = 0),
					this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)),
					this.setCurrentView(this.viewIndexes[i]);
			}
			_handleRangeOnFocus() {
				1 === this.selectedDates.length &&
					(m(this.selectedDates[0], this.focusDate)
						? ((this.rangeDateTo = this.selectedDates[0]),
						  (this.rangeDateFrom = this.focusDate))
						: ((this.rangeDateTo = this.focusDate),
						  (this.rangeDateFrom = this.selectedDates[0])));
			}
			getCell(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: i.day;
				if (!((e = k(e)) instanceof Date)) return;
				let { year: s, month: a, date: n } = o(e),
					r = `[data-year="${s}"]`,
					h = `[data-month="${a}"]`,
					l = {
						[i.day]: `${r}${h}[data-date="${n}"]`,
						[i.month]: `${r}${h}`,
						[i.year]: `${r}`,
					};
				return this.views[this.currentView].$el.querySelector(l[t]);
			}
			_showMobileOverlay() {
				R.classList.add("-active-");
			}
			_hasTransition() {
				return (
					window
						.getComputedStyle(this.$datepicker)
						.getPropertyValue("transition-duration")
						.split(", ")
						.reduce((e, t) => parseFloat(t) + e, 0) > 0
				);
			}
			get shouldUpdateDOM() {
				return this.visible || this.treatAsInline;
			}
			get parsedViewDate() {
				return o(this.viewDate);
			}
			get currentViewSingular() {
				return this.currentView.slice(0, -1);
			}
			get curDecade() {
				return c(this.viewDate);
			}
			get viewIndex() {
				return this.viewIndexes.indexOf(this.currentView);
			}
			get isFinalView() {
				return this.currentView === i.years;
			}
			get hasSelectedDates() {
				return this.selectedDates.length > 0;
			}
			get isMinViewReached() {
				return (
					this.currentView === this.opts.minView || this.currentView === i.days
				);
			}
			get $container() {
				return this.$customContainer || j;
			}
			static replacer(e, t, i) {
				return e.replace(t, function (e, t, s, a) {
					return t + i + a;
				});
			}
		}
		var U;
		return (
			P(K, "defaults", s),
			P(K, "version", "3.3.5"),
			P(K, "defaultGlobalContainerId", "air-datepicker-global-container"),
			(U = K.prototype),
			Object.assign(U, I),
			t.default
		);
	})();
});
