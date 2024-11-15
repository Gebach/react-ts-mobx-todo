import { Tabs, TabsProps } from 'antd'

interface TabsComponentProps {
  onChange: (key: string) => void
  tabsLabels: string[]
  tabsAmount: number
  tabsKeys?: string[]
}

function TabsComponent({
  onChange,
  tabsLabels,
  tabsAmount,
  tabsKeys = tabsLabels.map(l => `${tabsLabels.indexOf(l)}`),
}: TabsComponentProps) {
  const items: TabsProps['items'] = []

  for (let i = 0; i < tabsAmount; i++) {
    items.push({
      key: tabsKeys[i],
      label: tabsLabels[i],
    })
  }

  return <Tabs defaultActiveKey="0" items={items} onChange={onChange} />
}

export default TabsComponent
