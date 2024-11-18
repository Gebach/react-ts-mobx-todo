import { Button } from 'antd'
import { observer } from 'mobx-react-lite'

interface ClearAllButtonProps {
  onClick: () => void
  role?: string
}

function ClearAllButton({ onClick, role }: ClearAllButtonProps) {
  return (
    <Button role={role} color="danger" variant="solid" onClick={onClick}>
      Очистить все
    </Button>
  )
}

export default observer(ClearAllButton)
