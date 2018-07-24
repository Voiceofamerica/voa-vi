
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'Vietnamese',
  languageService: 'Vietnamese Service',
  propertyName: 'Vietnamese Mobile App',
  propertyId: 'something',
  rsidAccount: 'bbgvoa.viet.streaming.app',
  reportSuite: 'bbgvoa.viet.streaming.app',
})
setDirection('ltr')

export const graphqlAudience = Audience.vi

moment.locale('vi')

export const articleLabels = {
  updatedOn: (date: string) => `Cập nhật ngày ${date}`,
  relatedContent: 'Tin liên quan',
  shareMessage: '',
  galleryLoading: 'Đang tải...',
}

export const categorySettingsLabels = {
  header: 'Sắp xếp danh mục',
  myCategories: 'Mục',
  allCategories: 'Tất cả danh mục',
  dragAndDrop: 'Kéo danh mục đến đây',
  headlinesFirst: 'Tin hàng đầu nằm trên cùng',
  cancel: 'Hủy bỏ',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
        VOA sử dụng công cụ tránh kiểm duyệt Psiphon với tính năng mã hóa các dữ liệu trên ứng dụng. Kết nối của bạn với VOA được bảo mật, duy trì quyền riêng tư.
      </p>
      <p>
        Using Secure VPN.
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
        VOA sử dụng công cụ tránh kiểm duyệt Psiphon với tính năng mã hóa các dữ liệu trên ứng dụng. Kết nối của bạn với VOA được bảo mật, duy trì quyền riêng tư.
      </p>
      <p>
        Secure VPN is off.
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'Có thể bạn quan tâm',
  empty: 'Thông tin đang được cập nhật, mời bạn quay lại sau để xem các bài do Ban Biên tập chọn.',
}

export const errorBoundaryLabels = {
  error: 'Lỗi',
  retry: 'Thử lại',
}

export const favoritesSettingsLabels = {
  header: 'Yêu thích',
  removeAll: 'Xoá hết',
}

export const homeLabels = {
  headlines: 'Tin hàng đầu',
  search: 'Tìm',
  manage: '+',
}

export const introLabels = {
  content: (
    <div>
      <div>Ứng dụng nghe, đọc, xem</div>
      <div>tin tức của VOA.</div>
    </div>
  ),
  continue: 'Tiếp',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        Xin chọn video/audio trong danh sách bên dưới.
        Để tiếp tục đọc các bản tin mà không làm ngưng video/audio, xin vuốt dọc màn hình để đóng trang này.
        Mở lại trang này bằng cách vuốt lên từ nút PLAY tròn ở giữa màn hình.
        Bắt đầu và ngưng video/audio bằng cách nhấn nút PLAY.
      </p>
    </div>
  ),
  loading: 'Đang tải',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Tốc độ phát lại',
}

export const programsScreenLabels = {
  videos: 'Video',
  audio: 'Audio',
  empty: 'Không có nội dung',
  youtube: 'YouTube',
}

export const psiphonLoadingLabels = {
  bold: 'Please be patient.',
  text: 'This may take a few minutes while we gather the best information for you.',
}

export const pullToRefreshLabels = {
  pull: 'Vuốt dọc màn hình để cập nhật tin tức',
  release: 'Thả tay để cập nhật tin tức',
}

export const searchLabels = {
  header: 'Tìm',
  back: 'Trở lại',
  all: 'Tất cả',
  query: 'Tìm',
  empty: 'Không có kết quả',
}

export const settingsLabels = {
  header: 'Cài đặt',
  panic: 'Nút Huỷ',
  sendToFriends: 'Chia sẻ ứng dụng này với bạn bè',
  sendFeedback: 'Gửi ý kiến cho VOA',
  aboutVoa: 'VOA, dịch vụ truyền thông đối ngoại chính thức của chính phủ Hoa Kỳ, phát sóng lần đầu tiên vào năm 1942 sau khi Nhật tấn công Trân Châu Cảng. Ban Việt ngữ của VOA lần đầu tiên xuất hiện vào ngày 15/6/1943, tạm ngưng hoạt động từ năm 1946 trước khi lên sóng lại từ năm 1951 và liên tục phát triển tới tận ngày nay. VOA phổ biến thông tin bằng hơn 40 ngôn ngữ, nhắm tới các quốc gia vẫn còn thiếu hệ thống thông tin độc lập.',
  feedbackEmail: 'cbtran@voanews.com',
  feedbackSubject: encodeURIComponent('Ý kiến về ứng dụng VOA'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: '',
  psiphon: 'Secure VPN',
  psiphonOn: 'On',
  psiphonOff: 'Off',
  takeEffectOnRestart: 'You must restart the app for your changes to take effect.',
  okay: 'Okay',
}

export const textSettingsLabels = {
  textSize: 'Chọn cỡ chữ',
  normalSize: 'Nhỏ',
  largeSize: 'Vừa',
  hugeSize: 'Lớn',
}
