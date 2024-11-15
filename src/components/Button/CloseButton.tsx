import { CloseCircleFilled } from '@ant-design/icons'

interface CloseButtonProps {
  onClick: () => void
}

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <CloseCircleFilled
      onClick={onClick}
      className="text-red-600 text-xl transition-colors duration-100 hover:text-red-900 cursor-pointer"
    />
  )
}

export default CloseButton
