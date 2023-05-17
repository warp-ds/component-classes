export const attention = {
  base: 'border-2 relative',
  tooltip:
    'bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8',
  callout: 'bg-green-100 border-green-400 py-8 px-16 rounded-8',
  popover:
    'bg-white border-white rounded-8 p-16 filter drop-shadow-20',
  arrowBase:
    'absolute h-14 w-14 border-2 border-b-0 border-r-0 transform',
  arrowTooltip: 'bg-gray-700 border-gray-700',
  arrowCallout: 'bg-green-100 border-green-400',
  arrowPopover: 'bg-white border-white',
};

export const pageIndicator = {
  wrapper: 'flex space-x-8 p-8',
  dot: 'h-8 w-8 rounded-full',
  inactive: 'bg-bluegray-300',
  active: 'bg-blue-600',
};

export const ribbon = {
  base: 'py-4 px-8 border rounded-4 inline-flex last:mb-0',
  info: 'border-aqua-50 bg-aqua-50',
  success: 'border-green-100 bg-green-100',
  warning: 'border-yellow-100 bg-yellow-100',
  error: 'border-red-100 bg-red-100',
  disabled: 'border-bluegray-300 bg-bluegray-300',
  sponsored: 'border-aqua-200 bg-aqua-200',
  neutral: 'border-gray-100 bg-gray-100',
  outlined: 'border-bluegray-300 bg-white',
};

export const slider = {
  wrapper: 'touch-pan-y relative w-full h-44 py-2',
  track:
    'absolute i-bg-$color-slider-track-background h-4 top-20 rounded-4 w-full ',
  trackDisabled:
    'pointer-events-none i-bg-$color-slider-track-background-disabled',
  activeTrack:
    'absolute i-bg-$color-slider-track-background-active h-6 top-[19px] rounded-4',
  activeTrackDisabled:
    'i-bg-$color-slider-track-background-disabled pointer-events-none',
  thumb:
    'absolute i-shadow-$shadow-slider transition-shadow w-24 h-24 bottom-10 rounded-4 hover:i-bg-$color-slider-handle-background-hover active:i-bg-$color-slider-handle-background-active active:slider-handle-shadow-active hover:slider-handle-shadow-hover',
  thumbEnabled:
    'i-bg-$color-slider-handle-background cursor-pointer',
  thumbDisabled:
    'i-bg-$color-slider-handle-background-disabled cursor-disabled pointer-events-none',
};

export const modal = {
  backdrop:
    'f-modal-backdrop fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-20',
  modal:
    'f-modal rounded-8 mx-0 sm:mx-16 bg-white flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content:
    'block overflow-y-auto overflow-x-hidden last:mb-0 flex-grow flex-shrink px-16 sm:px-32 relative',
  footer: 'flex justify-end flex-shrink-0 px-16 sm:px-32',
  transitionTitle: 'transition-all duration-300',
  title:
    '-mt-4 sm:-mt-8 h-40 sm:h-48 grid f-grid gap-8 sm:gap-16 f-modal-title items-center px-16 sm:px-32 border-b sm:border-b-0 flex-shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: 'button button--pill f-modal-title-button',
  titleButtonLeft: '-ml-8 sm:-ml-12',
  titleButtonRight: '-mr-8 sm:-mr-12',
  titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
};

export const box = {
  box: 'group block relative break-words last:mb-0 p-16 rounded-8', // Relative here enables w-clickable
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // We target L and R to override the default rounded-8
  info: 'i-bg-$color-box-info-background',
  neutral: 'i-bg-$color-box-neutral-background',
  bordered: 'border-2 i-border-$color-box-bordered-border i-bg-$color-box-bordered-background',
  infoClickable: 'hover:i-bg-$color-box-info-background-hover active:i-bg-$color-box-info-background-hover',
  neutralClickable: 'hover:i-bg-$color-box-neutral-background-hover active:i-bg-$color-box-neutral-background-hover',
  borderedClickable: 'hover:i-bg-$color-box-bordered-background-hover active:i-bg-$color-box-bordered-background-hover hover:i-border-$color-box-bordered-border-hover active:i-border-$color-box-bordered-border-hover'
};

export const pill = {
  pill: 'flex items-center',
  button: 'inline-flex items-center focus:focusable:focus text-12 transition-all',
  suggestion: 'i-bg-$color-pill-suggestion-background hover:i-bg-$color-pill-suggestion-background-hover active:i-bg-$color-pill-suggestion-background-active i-text-$color-pill-suggestion-text font-bold',
  filter: 'i-bg-$color-pill-filter-background hover:i-bg-$color-pill-filter-background-hover active:i-bg-$color-pill-filter-background-active i-text-$color-pill-filter-text',
  label: 'pl-12 py-8 rounded-l-full',
  labelWithoutClose: 'pr-12 rounded-r-full',
  labelWithClose: 'pr-2',
  close: 'pr-12 pl-4 py-10 rounded-r-full',
  a11y: 'sr-only',
};

export const step = {
  step: 'group/step',
  stepVertical: 'group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16',
  stepVerticalLeft: 'grid-cols-[20px_1fr]',
  stepVerticalRight: 'grid-cols-[1fr_20px] text-right',
  stepHorizontal:
    'group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid gap-y-16 items-center',

  stepDot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300',
  stepDotVertical: '',
  stepDotVerticalLeft: '',
  stepDotVerticalRight: 'col-start-2',
  stepDotHorizontal: 'row-start-2 justify-self-end',

  stepDotActive:
    'i-border-$color-stepindicator-handle-border-active i-bg-$color-stepindicator-handle-background-active i-text-$color-stepindicator-handle-icon',
  stepDotComplete:
    'i-border-$color-stepindicator-handle-border-active i-bg-$color-stepindicator-handle-background-active i-text-$color-stepindicator-handle-icon',
  stepDotIncomplete:
    'i-border-$color-stepindicator-handle-border i-bg-$color-stepindicator-handle-background',

  stepLine: 'group-last/stepv:hidden transition-colors duration-300',
  stepLineVertical: 'w-2 h-full justify-self-center',
  stepLineVerticalLeft: '',
  stepLineVerticalRight: 'col-start-2',
  stepLineHorizontal: 'h-2 w-full row-start-2',
  stepLineHorizontalRight: 'group-last/steph:bg-transparent',
  stepLineHorizontalLeft: 'group-first/steph:bg-transparent',

  stepLineIncomplete: 'i-bg-$color-stepindicator-track-background',
  stepLineComplete: 'i-bg-$color-stepindicator-track-background-active',

  content: 'last:mb-0 group-last/step:last:pb-0',
  contentVertical: 'row-span-2 pb-32',
  contentHorizontal: 'col-span-3 px-16 row-start-1 text-center',
};

export const card = {
  card: 'cursor-pointer overflow-hidden relative transition-all',
  cardShadow: 'rounded-8 i-shadow-$shadow-card hover:i-shadow-$shadow-card-hover hover:i-bg-$color-card-background-hover tap-highlight-transparent',
  cardFlat: 'border-2 rounded-4',
  cardFlatUnselected:
    'i-bg-$color-card-flat-background i-border-$color-card-flat-border hover:i-bg-$color-card-flat-background-hover hover:i-border-$color-card-flat-border-hover active:i-bg-$color-card-flat-background-active active:i-border-$color-card-flat-border-active',
  cardFlatSelected:
    'i-border-$color-card-flat-border-active i-bg-$color-card-flat-background-active hover:i-bg-$color-card-flat-background-active-hover hover:i-border-$color-card-flat-border-active-hover active:i-border-$color-card-flat-border-active active:i-bg-$color-card-flat-background-active',
  cardSelected:
    'i-border-$color-card-border-active i-bg-$color-card-background-active hover:i-border-$color-card-border-active-hover hover:i-bg-$color-card-background-active-hover active:i-border-$color-card-border-active',
  cardOutline:
    'active:i-border-$color-card-flat-border absolute rounded-8 inset-0 transition-all border-2',
  cardOutlineUnselected: 'i-border-$color-card-border',
  cardOutlineSelected: 'i-border-$color-card-border-active hover:i-border-$color-card-border-active-hover',
  a11y: 'sr-only',
};

export const switchToggle = {
  label: 'block relative h-24 w-44 cursor-pointer f-switch',
  labelDisabled: 'pointer-events-none',
  switchTrack:
    'absolute h-full w-full rounded-full transition-colors',
  switchTrackSelected: 'bg-blue-600 f-track-selected',
  switchTrackUnselected: 'bg-gray-300 f-track-unselected',
  switchTrackDisabled: 'bg-bluegray-200',
  switchThumb:
    'absolute transition-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  switchThumbSelected: 'f-switch-selected',
  switchThumbNotDisabled: 'bg-white shadow',
  switchThumbDisabled: 'bg-bluegray-300',
};

export const toaster = {
  toasterContainer:
    'fixed fixed-ios-fix bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
  toaster:
    'f-toaster grid f-grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none',
};

export const toast = {
  toastWrapper: 'relative overflow-hidden w-full',
  toast:
    'toast flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all',
  toastPositive: 'bg-green-50 border-green-300 text-green-800',
  toastWarning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
  toastNegative: 'bg-red-50 border-red-300 text-red-800',
  toastNeutral: 'bg-gray-50 border-gray-300 text-gray-800',
  toastIcon: 'flex-shrink-0 rounded-full w-16 h-16 m-8',
  toastIconPositive: 'bg-green-300',
  toastIconWarning: 'bg-yellow-300',
  toastIconNegative: 'bg-red-300',
  toastIconNeutral: 'bg-gray-300',
  toastIconLoading: 'animate-bounce',
  toastContent: 'self-center mr-8 py-4 last:mb-0',
  toastClose: 'ml-auto p-8',
};

export const tabs = {
  tabContainer: 'mx-auto max-w-screen-md w-full grid f-grid relative',
  wunderbar:
    'absolute i-border-$color-tabs-border-active -bottom-0 border-b-4 transition-all',
  wrapperUnderlined:
    'border-b i-border-$color-tabs-border -mx-16 sm:mx-0 px-4 sm:px-0 mb-32 ',
};

export const tab = {
  tab: 'grid f-grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 i-text-$color-tabs-text i-border-$color-tabs-border hover:i-text-$color-tabs-text-hover hover:i-border-$color-tabs-border-hover',
  tabActive: 'i-text-$color-tabs-text-active',
  icon: 'mx-auto',
  iconUnderlined: 'i-text-$color-tabs-text',
  iconUnderlinedActive: 'i-text-$color-tabs-text-active',
  iconUnderlinedInactive: '', // missing tokens
  contentUnderlined: 'content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
  contentUnderlinedInactive: '', // missing tokens
  contentUnderlinedActive: 'i-text-$color-tabs-text-active',
  contentContainedActive: '',
};

export const buttonReset =
  'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

export const expandable = {
  expandable: 'will-change-height',
  expandableTitle: 'i-text-$color-expandable-title-text',
  expandableBox: 'i-bg-$color-expandable-background hover:i-bg-$color-expandable-background-hover py-0 px-0 ' + box.box,
  expandableBleed: box.bleed,
  chevron: 'inline-block align-middle transform transition-transform transition-gpu i-text-$color-expandable-icon',
  chevronNonBox: 'relative left-8',
  chevronBox: 'absolute right-16',
  chevronExpanded: '-rotate-180',
  button: buttonReset + ' hover:underline focus:underline',
  buttonBox: 'w-full text-left relative inline-flex! items-center ' + box.box,
};

/*
    This is an attempt to rewrite f-button into a component-class structure. Comment after each line shows what classes they were tied to before. The button component itself shows which of these classes were combined to do all the states etc...
    There is one kinds of unsupported classes in use here , all the colors that will be using the classes tied to the tokens instead (--i-).
*/
export const button = {
  // Buttontypes
  buttonSecondary:
    'py-10 px-14 border-2 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
  buttonPrimary:
    'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active', // .button--primary, .button--cta
  buttonFlat:
    'py-12 px-16 border-0! font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background! i-text-$color-button-quiet-text! hover:i-bg-$color-button-quiet-background-hover! active:i-bg-$color-button-quiet-background-active!', // .button--quiet, .button--flat
  buttonDestructive:
    'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover! active:i-bg-$color-button-negative-background-active!', // .button--destructive
  buttonDestructiveFlat:
    'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!', // .button--destructive-flat
  buttonUtility:
    'px-[15px] py-[11px] font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out border rounded-4 i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active!', // .button--utility
  buttonUtilityFlat:
    'py-12 px-16 bg-transparent border-0 font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover rounded-4', // .button--utility-flat
  buttonPill:
    'font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out rounded-full! min-h-[44px] min-w-[44px] border-0! p-4 i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover acive:i-bg-$color-button-pill-background-active inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill   missing:  hover:background-color: rgba(var(--f-blue-600-rgb), 0.1) , and:  hover:border-color: hsla(0, 0%, 100%, 0.4);
  buttonLink:
    'leading-24 max-w-max focusable ease-in-out inline i-text-$color-text-link hover:i-text-$color-text-link-hover hover:underline active:underline', //.button--link /* Buttons pretending to be links, (Should rather inherit the actual link setup in the future?)  */
  // Sizestuff
  buttonSmall: 'px-16 py-6 text-12 leading-16', // .button--small
  buttonSmallOverride: 'py-8', // .button--small.button--primary, .button--small.button--destructive, .button--small.button--destructive-flat, .button--small.button--order, .button--small.button--quiet
  buttonSmallSecondary: 'py-6', // .button--small.button--secondary
  buttonSmallUtility: 'py-7 px-15', // .button--small.button--secondary
  buttonSmallButtonPill: 'p-4 min-h-32 min-w-32', // .button--small.button--pill
  buttonSmallButtonLink: 'p-0', // .button--small.button--link
  // Disabled
  buttonIsDisabled:
    'py-10 px-14 font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
  // Progress indicator
  buttonInProgress:
    'py-10 px-14 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out animate-inprogress i-text-$color-button-loading-text! pointer-events-none i-bg-$color-button-loading-background!', // .button--in-progress, a.button--in-progress:visited
  linkAsButton: 'inline-block hover:no-underline',
  a11y: 'sr-only',
};

export const buttonGroup = {
  wrapper: 'inline-flex rounded-4 overflow-hidden',
  raised: 'i-shadow-$shadow-buttongroup',
  vertical: 'flex-col',
  nonOutlinedVertical: 'divide-y',
  nonOutlinedHorizontal: 'divide-x',
}

export const buttonGroupItem = {
  wrapper: 'relative i-text-$color-buttongroup-utility-text i-bg-$color-buttongroup-utility-background hover:i-bg-$color-buttongroup-utility-background-hover active:i-text-$color-buttongroup-utility-text-active active:i-bg-$color-buttongroup-utility-background-active',
  outlined: 'border hover:z-30 i-border-$color-buttongroup-utility-border active:i-border-$color-buttongroup-utility-border-active',
  outlinedVertical: '-mb-1 last:mb-0 first:rounded-lt-4 first:rounded-rt-4 last:rounded-lb-4 last:rounded-rb-4',
  outlinedHorizontal: '-mr-1 last:mr-0 first:rounded-lt-4 first:rounded-lb-4 last:rounded-rt-4 last:rounded-rb-4',
  outlinedVerticalResets: 'px-1 pt-1 last:pb-1 -mb-1 last:mb-0',
  outlinedHorizontalResets: 'py-1 pl-1 last:pr-1 -mr-1 last:mr-0',
  outlinedSelected: 'i-border-$color-buttongroup-utility-border-active',
  selected: 'z-30 i-text-$color-buttongroup-utility-text-active! i-bg-$color-buttongroup-utility-background-active!',
}

export const alert = {
  alert: "flex p-16 border border-l-4 rounded-4",
  icon: "w-16 mr-8 min-w-16",
  negative:  "i-border-$color-alert-negative-subtle-border i-bg-$color-alert-negative-background i-text-$color-alert-negative-text i-border-l-$color-alert-negative-border",
  negativeIcon: "i-text-$color-alert-negative-icon",
  positive:  "i-border-$color-alert-positive-subtle-border i-bg-$color-alert-positive-background i-text-$color-alert-positive-text i-border-l-$color-alert-positive-border",
  positiveIcon: "i-text-$color-alert-positive-icon",
  warning:  "i-border-$color-alert-warning-subtle-border i-bg-$color-alert-warning-background i-text-$color-alert-warning-text i-border-l-$color-alert-warning-border",
  warningIcon: "i-text-$color-alert-warning-icon",
  info:  "i-border-$color-alert-info-subtle-border i-bg-$color-alert-info-background i-text-$color-alert-info-text i-border-l-$color-alert-info-border",
  infoIcon: "i-text-$color-alert-info-icon"
}

export const input = {
  default: 'block text-16 mb-0 leading-22 i-text-$color-input-text-filled i-bg-$color-input-background i-border-$color-input-border hover:i-border-$color-input-border-hover active:i-border-$color-input-border-active rounded-4 py-12 px-8 block border-1 w-full focusable caret-current',
  textArea: 'min-h-[42] sm:min-h-[45]',
  disabled: 'i-bg-$color-input-background-disabled i-border-$color-input-border-disabled hover:i-border-$color-input-border-disabled! i-text-$color-input-text-disabled pointer-events-none',
  invalid: 'focusable i-border-$color-input-border-error i-text-$color-input-text-error!',
  readOnly: 'pl-0 bg-transparent border-0 pointer-events-none i-text-$color-input-text-read-only',
  placeholder: 'placeholder:i-text-$color-text-placeholder',
  wrapper: 'relative',
  suffix: 'pr-40',
  prefix: 'pl-40'
}

export const select = {
  default: 'block text-16 mb-0 leading-22 i-text-$color-select-text i-bg-$color-select-background i-border-$color-select-border hover:i-border-$color-select-border-hover active:i-border-$color-select-border-active rounded-4 py-12 px-8 block border-1 w-full focusable appearance-none pr-32 cursor-pointer caret-current',
  disabled: 'i-bg-$color-select-background-disabled i-border-$color-select-border-disabled hover:i-border-$color-select-border-disabled! active:i-border-$color-select-border-disabled! i-text-$color-select-text-disabled pointer-events-none',
  invalid: 'focusable i-border-$color-select-border-negative',
  readOnly: 'pl-0 bg-transparent border-0 pointer-events-none before:hidden',
  wrapper: 'relative',
  selectWrapper: `relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,
  chevron: 'absolute top-[30%] block right-0 bottom-0 w-32 h-full i-text-$color-select-icon',
  chevronDisabled: 'opacity-25',
}

export const label = {
    label: 'antialiased block relative text-14 font-bold pb-4 cursor-pointer i-text-$color-label-text',
    labelInvalid: 'i-text-$color-label-text-negative',
    optional: 'pl-8 font-normal text-14 i-text-$color-label-optional-text',
}

export const helpText = {
    helpText: 'text-12 mt-4 block i-text-$color-helptext-text',
    helpTextValid: 'i-text-$color-helptext-text-positive',
    helpTextInvalid: 'i-text-$color-helptext-text-negative'
}

const prefixSuffixWrapperBase =
  'absolute top-0 bottom-0 hover:text-aqua-400 flex justify-center items-center focusable ';

export const suffix = {
  wrapper: prefixSuffixWrapperBase + 'right-0',
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon: 'w-40',
  label: `${label.label} pb-0 text-12`,
};

export const prefix = {
  wrapper: prefixSuffixWrapperBase + 'left-0',
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon: 'w-40',
  label: `${label.label} pb-0 text-secondary text-12`,
};

export const breadcrumbs = {
  wrapper: 'flex space-x-8',
  text: 'i-text-$color-breadcrumbs-text',
  link: 'i-text-$color-breadcrumbs-link-text',
  separator: 'select-none i-text-$color-breadcrumbs-icon',
  a11y: 'sr-only',
}

export const toggle = {
  wrapper: 'relative py-1',
  deadToggleWrapper: 'h-20 w-20 pointer-events-none',
  input: 'peer',
  deadToggleInput: 'hidden',
  inputDisabled: 'pointer-events-none',
  focusable: 'peer-focus:focusable:focus peer-focus-visible:focusable:focus-visible peer-not-focus-visible:focusable:focus:not(:focus-visible)',
  focusableWithin: 'focus-within:focusable:focus focus-within:focusable:focus-visible',
  label: 'cursor-pointer text-16 i-text-$color-label-text py-2 pl-28 select-none relative block before:block before:border before:absolute before:transition-all before:left-0 before:w-20 before:h-20 before:top-2',
  deadToggleLabel: '-mt-2',
  noContent: `before:content-['']`,
  indeterminate: `leading-[1.1] before:i-text-$color-text-inverted before:text-center before:font-bold before:content-['–'] peer-indeterminate:before:i-border-$color-checkbox-border-active peer-indeterminate:before:i-bg-$color-checkbox-background-active peer-indeterminate:hover:before:i-border-$color-checkbox-border-hover peer-indeterminate:hover:before:i-bg-$color-checkbox-background-active-hover`,
  labelDisabled: 'pointer-events-none',
  checkbox: 'before:rounded-2 hover:before:i-border-$color-checkbox-border-hover hover:before:i-bg-$color-checkbox-background-hover',
  checkboxChecked: 'peer-checked:before:i-border-$color-checkbox-border-active peer-checked:before:i-bg-$color-checkbox-background-active peer-checked:peer-hover:before:i-border-$color-checkbox-border-active-hover peer-checked:peer-hover:before:i-bg-$color-checkbox-background-active-hover',
  checkboxInvalid: 'before:i-bg-$color-checkbox-negative-background hover:before:i-bg-$color-checkbox-negative-background-hover peer-checked:before:i-border-$color-checkbox-negative-border-active hover:before:i-border-$color-checkbox-negative-border-hover peer-checked:before:i-bg-$color-checkbox-negative-background-active peer-checked:peer-hover:before:i-bg-$color-checkbox-negative-background-active-hover peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-active-hover',
  checkboxDisabled: 'before:i-bg-$color-checkbox-background-disabled before:i-border-$color-checkbox-border-disabled peer-checked:before:i-border-$color-checkbox-border-active-disabled peer-checked:before:i-bg-$color-checkbox-background-active-disabled',
  labelCheckboxBackground: 'i-bg-$color-checkbox-background',
  labelCheckboxBorder: 'i-border-$color-checkbox-border',
  radio: 'before:rounded-full peer-checked:before:border-[6] peer-checked:peer-hover:before:i-border-$color-radio-border-active-hover peer-hover:before:i-border-$color-radio-border-hover peer-hover:before:i-bg-$color-radio-background-hover',
  radioChecked: 'peer-checked:before:i-border-$color-radio-border-active',
  radioInvalid: 'before:i-bg-$color-radio-negative-background peer-hover:before:i-bg-$color-radio-negative-background-hover before:i-border-$color-radio-negative-border peer-hover:before:i-border-$color-radio-negative-border-hover peer-checked:before:i-border-$color-radio-negative-border-active peer-checked:peer-hover:before:i-border-$color-radio-negative-border-active-hover ',
  radioDisabled: 'before:i-bg-$color-radio-background-disabled before:i-border-$color-radio-border-disabled peer-checked:before:i-border-$color-radio-border-active-disabled',
  labelRadioBackground: 'i-bg-$color-radio-background',
  labelRadioBorder: 'i-border-$color-radio-border',
  radioButtons: 'inline-flex relative font-bold rounded-8',
  radioButtonsGroup: 'group',
  radioButtonsLabel: 'peer-hover:peer-not-checked:i-bg-$color-buttongroup-primary-background-hover peer-checked:i-text-$color-buttongroup-primary-text-active peer-checked:i-bg-$color-buttongroup-primary-background-active peer-checked:i-border-$color-buttongroup-primary-border-active block relative text-14 font-bold pb-4 cursor-pointer i-text-$color-buttongroup-primary-text text-center i-bg-$color-background border-2 i-border-$color-buttongroup-primary-border py-10 pl-12 pr-14 group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 peer-checked:z-10 group-not-first:-ml-2',
  radioButtonsJustified: 'flex!',
  radioButtonsGroupJustified: 'grow-1 shrink-0 basis-auto',
  radioButtonsLabelSmall: 'text-12 py-[5px]! px-[8px]!',
  icon: 'peer-checked:before:bg-center before:bg-[var(--x-form-check-mark)]',
  a11y: 'sr-only',
};

export const clickable = {
  clickable: 'absolute inset-0 h-full w-full appearance-none cursor-pointer',
  clickableNotToggle: 'inset-0 absolute',
  label: `px-12 py-8 ${label.label} cursor-pointer`, 
}
