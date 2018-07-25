
import {
  type as setPsiphonEnabledType,
  SetPsiphonEnabledAction,
} from '../actions/setPsiphonEnabled'

import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'

const actors: ActorMap<AppSettings> = {
  [setPsiphonEnabledType]: (prev, { psiphonEnabled }: SetPsiphonEnabledAction) => ({
    ...prev,
    psiphonEnabled,
  }),
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
}

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 1813,
      name: 'Việt Nam',
    },
    {
      id: 1812,
      name: 'Hoa Kỳ',
    },
    {
      id: 2406,
      name: 'Biển Đông',
    },
    {
      id: 1925,
      name: 'Châu Á',
    },
    {
      id: 1788,
      name: 'Thế giới',
    },
    {
      id: 1799,
      name: 'Kinh tế',
    },
    {
      id: 1809,
      name: 'Khoa học',
    },
    {
      id: 1800,
      name: 'Đời sống',
    },
    {
      id: 1778,
      name: 'Blog',
    },
    {
      id: 3702,
      name: 'Diễn đàn',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  psiphonEnabled: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
