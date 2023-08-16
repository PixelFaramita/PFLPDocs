import '@vue/runtime-core'
export {}
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ItAlert:
      | (typeof import('equal-vue'))['Alert']
      | {
          variant: string
        }
    ItAvatar: (typeof import('equal-vue'))['Avatar']
    ItAvatarGroup: (typeof import('equal-vue'))['AvatarGroup']
    ItButton:
      | (typeof import('equal-vue'))['Button']
      | {
          variant: string
        }
    ItButtonGroup: (typeof import('equal-vue'))['ButtonGroup']
    ItBadge: (typeof import('equal-vue'))['Badge']
    ItCheckbox: (typeof import('equal-vue'))['Checkbox']
    ItCollapse: (typeof import('equal-vue'))['Collapse']
    ItCollapseItem: (typeof import('equal-vue'))['CollapseItem']
    ItColorPicker: (typeof import('equal-vue'))['ColorPicker']
    ItDivider: (typeof import('equal-vue'))['Divider']
    ItDrawer: (typeof import('equal-vue'))['Drawer']
    ItDropdown: (typeof import('equal-vue'))['Dropdown']
    ItInput: (typeof import('equal-vue'))['Input']
    ItSpinner:
      | (typeof import('equal-vue'))['Spinner']
      | {
          variant: string
        }
      | variants
    ItLoadingBar: (typeof import('equal-vue'))['Loadingbar']
    ItModal: (typeof import('equal-vue'))['Modal']
    ItNumberInput: (typeof import('equal-vue'))['NumberInput']
    ItPopover: (typeof import('equal-vue'))['Popover']
    ItProgressbar: (typeof import('equal-vue'))['Progressbar']
    ItRadio: (typeof import('equal-vue'))['Radio']
    ItSelect: (typeof import('equal-vue'))['Select']
    ItSlider: (typeof import('equal-vue'))['Slider']
    ItSwitch: (typeof import('equal-vue'))['Switch']
    ItTabs: (typeof import('equal-vue'))['Tabs']
    ItTab: (typeof import('equal-vue'))['Tab']
    ItTag: (typeof import('equal-vue'))['Tag']
    ItTextarea: (typeof import('equal-vue'))['Textarea']
    ItToggle: (typeof import('equal-vue'))['Toggle']
    ItTooltip: (typeof import('equal-vue'))['Tooltip']
  }
}
