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
  base: 'py-4 px-8 border rounded-4 inline-flex last-child:mb-0',
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
  wrapper: 'f-slider relative w-full h-44 py-2',
  track: 'track absolute bg-blue-200 h-4 top-20 rounded-4 w-full',
  trackDisabled: 'pointer-events-none bg-gray-200',
  activeTrack:
    'larger-active-track absolute bg-blue-600 h-4 top-20 rounded-4',
  activeTrackDisabled: 'bg-bluegray-300 pointer-events-none',
  thumb:
    'f-thumb absolute w-24 h-24 bottom-10 rounded-4 outline-none',
  thumbEnabled: 'shadow bg-blue-600 cursor-pointer',
  thumbDisabled:
    'bg-bluegray-300 cursor-disabled pointer-events-none',
};

export const modal = {
  backdrop:
    'f-modal-backdrop fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-20',
  modal:
    'f-modal rounded-8 mx-0 sm:mx-16 bg-white flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content:
    'block overflow-y-auto overflow-x-hidden last-child:mb-0 flex-grow flex-shrink px-16 sm:px-32 relative',
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
  box: 'group block relative break-words last-child:mb-0 p-16 rounded-8', // relative here enables f-clickable
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // we target L and R separately because of TW's rules-order
};

export const step = {
  stepVertical: 'step-v grid f-grid grid-flow-col gap-x-16',
  stepVerticalLeft: 'step-v-l',
  stepVerticalRight: 'step-v-r text-right',
  stepHorizontal: 'step-h flex-1 grid f-grid gap-y-16 items-center',

  stepDot:
    'rounded-full border-2 h-20 w-20 transition-colors duration-300',
  stepDotVertical: '',
  stepDotVerticalLeft: '',
  stepDotVerticalRight: 'col-start-2',
  stepDotHorizontal: 'row-start-2 justify-self-end',

  stepDotActive: 'border-blue-600 bg-blue-600 text-blue-600',
  stepDotComplete: 'border-blue-600 bg-blue-600 text-white',
  stepDotIncomplete: 'border-bluegray-300 bg-white text-white',

  stepLine: 'step-line transition-colors duration-300',
  stepLineVertical: 'w-2 h-full justify-self-center',
  stepLineVerticalLeft: '',
  stepLineVerticalRight: 'col-start-2',
  stepLineHorizontal: 'h-2 w-full row-start-2',

  stepLineIncomplete: 'bg-bluegray-300',
  stepLineComplete: 'bg-blue-600',

  content: 'last-child:mb-0',
  contentVertical: 'row-span-2 pb-32',
  contentHorizontal: 'col-span-3 px-16 row-start-1 text-center',
};

export const card = {
  card: 'cursor-pointer overflow-hidden relative transition-all outline-none',
  cardShadow: 'f-card rounded-8',
  cardFlat: 'border-2 rounded-4',
  cardFlatUnselected:
    'border-bluegray-300 hover:bg-gray-50 hover:border-bluegray-400 active:border-bluegray-300',
  cardFlatSelected:
    'border-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-700 active:border-blue-600',
  cardSelected:
    'border-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-700 active:border-blue-600',
  cardOutline:
    'f-card-outline absolute rounded-8 inset-0 transition-all border-2',
  cardOutlineUnselected: 'border-transparent',
  cardOutlineSelected: 'border-blue-600 hover:border-blue-700',
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
  toastContent: 'self-center mr-8 py-4 last-child:mb-0',
  toastClose: 'ml-auto p-8',
};

export const tabs = {
  wrapperUnderlined:
    'border-b border-gray-200 -mx-16 sm:mx-0 px-4 sm:px-0 mb-32',
  wrapperContained: '',
  tabContainer: 'mx-auto max-w-screen-md w-full grid f-grid relative',
  wunderbar:
    'absolute border-blue-600 -bottom-4 border-b-4 transition-all',
};

export const tab = {
  tab: 'grid f-grid items-center gap-8 focus-ring font-normal antialias p-16 pb-4 hover:underline f-tab',
  tabActive: 'active-tab',
  tabContained: 'rounded-t-8',
  tabContainedActive: 'bg-aqua-50',
  icon: 'mx-auto ',
  iconUnderlined: 'f-tab-icon',
  iconUnderlinedActive: 'text-blue-600',
  iconUnderlinedInactive: 'text-gray-300',
  contentUnderlined: 'font-bold content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
  contentUnderlinedInactive: 'text-gray-500 f-tab-text',
  contentUnderlinedActive: 'text-blue-600',
  contentContainedActive: 'font-bold',
};

export const buttonReset =
  'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

export const expandable = {
  expandable: 'f-expandable',
  expandableInfo: 'bg-aqua-50',
  expandableBox: 'py-0 px-0 ' + box.box,
  expandableBleed: box.bleed,
  chevron:
    'inline-block align-middle transform transition-transform transition-gpu',
  chevronNonBox: 'relative left-8',
  chevronBox: 'f-expandable-chevron absolute right-16',
  chevronExpanded: '-rotate-180',
  button: buttonReset + ' hover:underline focus:underline',
  buttonBox: 'w-full text-left relative ' + box.box,
  buttonInfo: 'hover:text-aqua-700 active:text-aqua-800',
};

const prefixSuffixWrapperBase =
  'absolute top-0 bottom-0 hover:text-aqua-400 flex justify-center items-center focus-ring ';

export const suffix = {
  wrapper: prefixSuffixWrapperBase + 'right-0',
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon: 'w-40',
  label: 'field-label pb-0 text-12',
};

export const prefix = {
  wrapper: prefixSuffixWrapperBase + 'left-0',
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon: 'w-40',
  label: 'field-label pb-0 text-secondary text-12',
};

/*
    This is an attempt to rewrite f-button into a component-class structure. Comment after each line shows what classes they were tied to before. The button component itself shows which of these classes were combined to do all the states etc...
    There is one kinds of unsupported classes in use here , all the colors that will be using the classes tied to the tokens instead (--i-).
*/
export const button = {
  // Buttontypes
  buttonSecondary:
    'py-10 px-14 border-2 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
  buttonPrimary:
    'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active', // .button--primary, .button--cta
  buttonFlat:
    'py-12 px-16 border-0! font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active', // .button--quiet, .button--flat
  buttonDestructive:
    'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover! active:i-bg-$color-button-negative-background-active!', // .button--destructive
  buttonDestructiveFlat:
    'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!', // .button--destructive-flat
  buttonUtility:
    'px-[15px] py-[11px] font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out border rounded-4 i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active!', // .button--utility
  buttonUtilityFlat:
    'py-12 px-16 bg-transparent border-0 font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-utility-text i-bg-$color-button-utility-background hover:i-bg-$color-button-utility-background-hover rounded-4', // .button--utility-flat
  buttonPill:
    'font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out rounded-full! min-h-[44px] min-w-[44px] border-0! p-4 i-text-$color-button-favorite-text i-bg-$color-button-favorite-background hover:i-bg-$color-button-favorite-background-hover acive:i-bg-$color-button-favorite-background-active inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill   missing:  hover:background-color: rgba(var(--f-blue-600-rgb), 0.1) , and:  hover:border-color: hsla(0, 0%, 100%, 0.4);
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
    'py-10 px-14 font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text! cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
  // Progress indicator
  buttonInProgress:
    'py-10 px-14 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out animate-inprogress i-text-$color-button-loading-text! pointer-events-none i-bg-$color-button-loading-background!', // .button--in-progress, a.button--in-progress:visited
};

export const alert = {
  alert: "flex p-16 border border-l-4 rounded-4",
  icon: "w-16 mr-8 pt-4",
  negative:  "i-border-$color-alert-negative-subtle-border i-bg-$color-alert-negative-background i-text-$color-alert-negative-text i-border-l-$color-alert-negative-border",
  negativeIcon: "i-text-$color-alert-negative-icon",
  positive:  "i-border-$color-alert-positive-subtle-border i-bg-$color-alert-positive-background i-text-$color-alert-positive-text i-border-l-$color-alert-positive-border",
  positiveIcon: "i-text-$color-alert-positive-icon",
  warning:  "i-border-$color-alert-warning-subtle-border i-bg-$color-alert-warning-background i-text-$color-alert-warning-text i-border-l-$color-alert-warning-border",
  warningIcon: "i-text-$color-alert-warning-icon",
  info:  "i-border-$color-alert-info-subtle-border i-bg-$color-alert-info-background i-text-$color-alert-info-text i-border-l-$color-alert-info-border",
  infoIcon: "i-text-$color-alert-info-icon"
}