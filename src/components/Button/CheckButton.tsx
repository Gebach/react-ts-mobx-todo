import { CheckCircleFilled } from '@ant-design/icons'

interface CheckButtonProps {
  onClick: () => void
}

function CheckButton({ onClick }: CheckButtonProps) {
  return (
    <CheckCircleFilled
      style={{ color: 'rgb(34, 197, 94)', fontSize: '24px' }}
      onClick={onClick}
      className="transition-transform duration-300 hover:scale-125"
    />
  )
}

export default CheckButton
