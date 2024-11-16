import { Button, Tabs, TabsProps } from 'antd'
import todoStore from '../../stores/todo-store'

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
  const { clearTodos } = todoStore

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
      <Button color="danger" variant="solid" onClick={onClickHandler}>
        Очистить все
      </Button>
    </>
  )
}

export default TabsComponent
