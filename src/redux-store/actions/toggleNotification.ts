
import { Action } from 'redux'

export const type = 'TOGGLE_NOTIFICATION'

interface ToggleNotificationOptions {
  id: number
  on?: boolean
}

export type ToggleNotificationAction = ToggleNotificationOptions & Action

export default (options: ToggleNotificationOptions): ToggleNotificationAction => ({
  ...options,
  type,
})
