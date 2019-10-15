import React from 'react'
import {
  EuiStat,
  EuiFlexItem,
  EuiFlexGroup,
  EuiPanel
  // EuiIcon
} from '@elastic/eui'
import { ResponsiveBar } from '@nivo/bar'

const Home = () => {
  const data = [
    {
      country: 'AD',
      'hot dog': 46,
      'hot dogColor': 'hsl(114, 70%, 50%)',
      burger: 188,
      burgerColor: 'hsl(246, 70%, 50%)',
      sandwich: 174,
      sandwichColor: 'hsl(92, 70%, 50%)',
      kebab: 180,
      kebabColor: 'hsl(3, 70%, 50%)',
      fries: 86,
      friesColor: 'hsl(296, 70%, 50%)',
      donut: 1,
      donutColor: 'hsl(44, 70%, 50%)'
    },
    {
      country: 'AE',
      'hot dog': 108,
      'hot dogColor': 'hsl(316, 70%, 50%)',
      burger: 84,
      burgerColor: 'hsl(77, 70%, 50%)',
      sandwich: 194,
      sandwichColor: 'hsl(130, 70%, 50%)',
      kebab: 176,
      kebabColor: 'hsl(288, 70%, 50%)',
      fries: 49,
      friesColor: 'hsl(95, 70%, 50%)',
      donut: 160,
      donutColor: 'hsl(325, 70%, 50%)'
    },
    {
      country: 'AF',
      'hot dog': 188,
      'hot dogColor': 'hsl(93, 70%, 50%)',
      burger: 133,
      burgerColor: 'hsl(73, 70%, 50%)',
      sandwich: 175,
      sandwichColor: 'hsl(232, 70%, 50%)',
      kebab: 52,
      kebabColor: 'hsl(259, 70%, 50%)',
      fries: 48,
      friesColor: 'hsl(267, 70%, 50%)',
      donut: 82,
      donutColor: 'hsl(34, 70%, 50%)'
    },
    {
      country: 'AG',
      'hot dog': 132,
      'hot dogColor': 'hsl(38, 70%, 50%)',
      burger: 68,
      burgerColor: 'hsl(301, 70%, 50%)',
      sandwich: 78,
      sandwichColor: 'hsl(79, 70%, 50%)',
      kebab: 171,
      kebabColor: 'hsl(261, 70%, 50%)',
      fries: 173,
      friesColor: 'hsl(30, 70%, 50%)',
      donut: 27,
      donutColor: 'hsl(200, 70%, 50%)'
    },
    {
      country: 'AI',
      'hot dog': 30,
      'hot dogColor': 'hsl(141, 70%, 50%)',
      burger: 95,
      burgerColor: 'hsl(250, 70%, 50%)',
      sandwich: 196,
      sandwichColor: 'hsl(327, 70%, 50%)',
      kebab: 29,
      kebabColor: 'hsl(280, 70%, 50%)',
      fries: 57,
      friesColor: 'hsl(94, 70%, 50%)',
      donut: 133,
      donutColor: 'hsl(292, 70%, 50%)'
    },
    {
      country: 'AL',
      'hot dog': 51,
      'hot dogColor': 'hsl(197, 70%, 50%)',
      burger: 149,
      burgerColor: 'hsl(345, 70%, 50%)',
      sandwich: 162,
      sandwichColor: 'hsl(296, 70%, 50%)',
      kebab: 128,
      kebabColor: 'hsl(8, 70%, 50%)',
      fries: 73,
      friesColor: 'hsl(177, 70%, 50%)',
      donut: 113,
      donutColor: 'hsl(158, 70%, 50%)'
    },
    {
      country: 'AM',
      'hot dog': 27,
      'hot dogColor': 'hsl(330, 70%, 50%)',
      burger: 72,
      burgerColor: 'hsl(292, 70%, 50%)',
      sandwich: 153,
      sandwichColor: 'hsl(227, 70%, 50%)',
      kebab: 69,
      kebabColor: 'hsl(287, 70%, 50%)',
      fries: 39,
      friesColor: 'hsl(217, 70%, 50%)',
      donut: 169,
      donutColor: 'hsl(340, 70%, 50%)'
    }
  ]

  return (
    <div>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title='8,888'
              description='Total Cases'
              textAlign='right'
              isLoading={false}
            >
              {/* <EuiIcon type='empty' /> */}
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title='2,000'
              description='Total judges'
              titleColor='accent'
              textAlign='right'
              isLoading={false}
            >
              {/* <EuiIcon type='clock' color='accent' /> */}
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title='6,800'
              description='Total courtrooms'
              titleColor='secondary'
              textAlign='right'
              isLoading={false}
            >
              {/* <EuiIcon type='check' color='secondary' /> */}
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiStat
              title='88'
              description='Total users'
              titleColor='danger'
              textAlign='right'
              isLoading={false}
            >
              {/* <EuiIcon type='alert' color='danger' /> */}
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiPanel style={{ height: '300px' }}>
            <ResponsiveBar
              data={data}
              keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
              ]}
              indexBy='country'
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'nivo' }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: 'fries'
                  },
                  id: 'dots'
                },
                {
                  match: {
                    id: 'sandwich'
                  },
                  id: 'lines'
                }
              ]}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemOpacity: 1
                      }
                    }
                  ]
                }
              ]}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel></EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default Home
