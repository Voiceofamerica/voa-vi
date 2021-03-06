
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import TopNav, { TopNavItem, StaticItem } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
import { programsScreenLabels } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import VideoPrograms from './VideoPrograms'
import AudioPrograms from './AudioPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'audio' | 'video'

const VIDEO: ProgramType = 'video'
const AUDIO: ProgramType = 'audio'
const DEFAULT = VIDEO

const VIDEO_ZONES: Category[] = [
  {
    id: 0,
    name: 'Tất cả',
  },
  {
    id: 3405,
    name: 'Truyền hình vệ tinh',
  },
  {
    id: 1958,
    name: 'Tin thời sự',
  },
  {
    id: 2089,
    name: 'Phóng sự đặc biệt',
  },
  {
    id: 3920,
    name: 'Câu chuyện nổi bật',
  },
  {
    id: 2406,
    name: 'Tranh chấp biển Đông',
  },
  {
    id: 2240,
    name: 'Tin vắn Hoa Kỳ',
  },
  {
    id: 5083,
    name: 'Tin vắn châu Á',
  },
  {
    id: 5089,
    name: 'Hỏi đáp Du học Mỹ',
  },
  {
    id: 5213,
    name: 'Hỏi đáp Di trú Mỹ',
  },
  {
    id: 5268,
    name: 'Hỏi đáp Y học',
  },
  {
    id: 3768,
    name: 'Học tiếng Anh qua phim ảnh',
  },
  {
    id: 4019,
    name: 'News Words',
  },
  {
    id: 4718,
    name: 'Everyday Grammar',
  },
  {
    id: 4830,
    name: 'Let\'s Learn English',
  },
  {
    id: 5389,
    name: 'Let\'s Learn English 2',
  },
  {
    id: 3635,
    name: 'English in a Minute',
  },
]

const AUDIO_ZONES: Category[] = [
  {
    id: 1952,
    name: 'Chương trình 4h30 sáng',
  },
  {
    id: 1957,
    name: 'Chương trình 10h đêm',
  },
]

interface Props extends RouteComponentProps<Params>, AnalyticsProps {
}

class ProgramsScreen extends React.Component<Props> {
  render () {
    return (
      <div className={programsScreen}>
        {this.renderTopNav()}
        <ErrorBoundary>
          {this.renderPrograms()}
        </ErrorBoundary>
        {this.renderProgramTypes()}
      </div>
    )
  }

  private getZoneId = () => {
    const { type = DEFAULT, zone = type === AUDIO ? 1952 : 0 } = this.props.match.params
    return typeof zone === 'number' ? zone : parseInt(zone, 10)
  }

  private setProgramType = (programType: ProgramType) => {
    const { history, match } = this.props
    const { type } = match.params

    if (type === programType) {
      return
    }

    history.replace(`/programs/${programType}`)
  }

  private setZoneId = (zoneId: number) => {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    history.replace(`/programs/${type}/${zoneId}`)
  }

  private renderPrograms () {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    if (type === VIDEO) {
      return <VideoPrograms history={history} zoneId={this.getZoneId()} />
    } else if (type === AUDIO) {
      return <AudioPrograms history={history} zoneId={this.getZoneId()} />
    } else {
      throw new Error(`Invalid programType ${type}`)
    }
  }

  private renderProgramTypes () {
    const { type = DEFAULT } = this.props.match.params

    return (
      <div className={programTypeNav}>
        <div className={type === VIDEO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(VIDEO)}>
          {programsScreenLabels.videos}
        </div>
        <div className={type === AUDIO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(AUDIO)}>
          {programsScreenLabels.audio}
        </div>
      </div>
    )
  }

  private renderTopNav () {
    const { type = DEFAULT } = this.props.match.params

    if (type === VIDEO) {
      return this.renderTopNavFromItems(VIDEO_ZONES)
    } else if (type === AUDIO) {
      return this.renderTopNavFromItems(AUDIO_ZONES)
    } else {
      throw new Error(`Unrecognized program type ${type}`)
    }
  }

  private renderTopNavFromItems (items: Category[]) {
    const zoneId = this.getZoneId()

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav flex>
          <StaticItem />
          {
            items.map(({ id, name }) => {
              const selected = zoneId === id

              return (
                <TopNavItem
                  key={id}
                  selected={selected}
                  onClick={() => this.setZoneId(id)}
                >
                  {name}
                </TopNavItem>
              )
            })
          }
          <TopNavItem />
        </TopNav>
      </ThemeProvider>
    )
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

export default withAnalytics(ProgramsScreen)
