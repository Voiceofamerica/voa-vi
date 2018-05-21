
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
      id: 6159,
      name: 'Việt Nam',
    },
    {
      id: 6165,
      name: 'Hoa Kỳ',
    },
    {
      id: 6184,
      name: 'Biển Đông',
    },
    {
      id: 1925,
      name: 'Châu Á',
    },
    {
      id: 6180,
      name: 'Thế giới',
    },
    {
      id: 3871,
      name: 'Blog',
    },
    {
      id: 6185,
      name: 'Diễn đàn',
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
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  usePsiphon: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)