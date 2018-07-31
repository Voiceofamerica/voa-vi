
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
  propertyName: 'voa vietnamese news app',
  propertyId: '342',
  rsidAccount: 'bbgvoa.viet.streaming.app',
  reportSuite: 'bbgvoa.viet.streaming.app',
})
setDirection('ltr')

export const graphqlAudience = Audience.vi

moment.locale('en-gb')

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
  cancel: 'Hủy',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
        VOA sử dụng công cụ tránh kiểm duyệt Psiphon với tính năng mã hóa các dữ liệu trên ứng dụng. Kết nối của bạn với VOA được bảo mật, duy trì quyền riêng tư.
      </p>
      <p>
      Proxy bảo mật được bật
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Bạn có thể thay đổi tính năng này trong phần Cài đặt</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
        VOA sử dụng công cụ tránh kiểm duyệt Psiphon với tính năng mã hóa các dữ liệu trên ứng dụng. Kết nối của bạn với VOA được bảo mật, duy trì quyền riêng tư.
      </p>
      <p>
      Proxy bảo mật được tắt
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Bạn có thể thay đổi tính năng này trong phần Cài đặt</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'Có thể bạn quan tâm',
  empty: 'Thông tin đang được cập nhật, mời bạn quay lại sau để xem các bài do Ban Biên tập chọn.',
}

export const errorBoundaryLabels = {
  error: 'Ứng dụng bị lỗi',
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
      <div>tin tức của VOA</div>
    </div>
  ),
  continue: 'Tiếp',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
      Xin chọn video/audio trong mục Multimedia.
      Để tiếp tục đọc các bản tin trong lúc ứng dụng đang phát video/audio, xin nhấp tay vào đầu màn hình để đóng trang video/audio.
      Mở lại trang này bằng cách nhấp vào nút PLAY tròn ở giữa màn hình.
      Bắt đầu hay ngưng video/audio bằng cách nhấn nút PLAY.
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
  bold: 'Xin vui lòng chờ đợi.',
  text: 'Ứng dụng đang cập nhật thông tin.',
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
  feedbackEmail: 'voatiengvietweb@gmail.com',
  feedbackSubject: encodeURIComponent('Ý kiến về ứng dụng VOA'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: '',
  psiphon: 'Mạng riêng ảo proxy',
  psiphonOn: 'Bật',
  psiphonOff: 'Tắt',
  takeEffectOnRestart: 'Bạn phải khởi động lại ứng dụng để các thay đổi của bạn có hiệu lực.',
  okay: 'OK',
}

export const textSettingsLabels = {
  textSize: 'Chọn cỡ chữ',
  normalSize: 'Nhỏ',
  largeSize: 'Vừa',
  hugeSize: 'Lớn',
}
