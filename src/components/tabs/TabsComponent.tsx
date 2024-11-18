import { Tabs, TabsProps } from 'antd'
import todosStore from '../../stores/todo-store'
import ClearAllButton from '../Button/ClearAllButton'

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
  const { clearTodos } = todosStore
  const items: TabsProps['items'] = []

  for (let i = 0; i < tabsAmount; i++) {
    items.push({
      key: tabsKeys[i],
      label: tabsLabels[i],
    })
  }

  function onClickHandler() {
    if (confirm('Вы уверены, что хотите очистить лист Todo?')) clearTodos()
  }

  return (
    <>
      <Tabs defaultActiveKey="0" items={items} onChange={onChange} />
      <ClearAllButton role="clear-todos" onClick={onClickHandler} />
    </>
  )
}

export default TabsComponent
