
import * as React from 'react'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'Vietnamese',
  languageService: 'Vietnamese Service',
  propertyName: 'Vietnamese Mobile App',
  propertyId: 'something',
  rsidAccount: 'something',
  reportSuite: 'something',
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
  content: (
    <div>
      VOA sử dụng công cụ tránh kiểm duyệt Psiphon với tính năng mã hóa các dữ liệu trên ứng dụng. Kết nối của bạn với VOA được bảo mật, duy trì quyền riêng tư.
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
  content: 'Ứng dụng nghe, đọc, xem tin tức của VOA.',
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
}

export const textSettingsLabels = {
  textSize: 'Chọn cỡ chữ',
  normalSize: 'Nhỏ',
  largeSize: 'Vừa',
  hugeSize: 'Lớn',
}
