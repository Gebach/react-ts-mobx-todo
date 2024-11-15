interface WrapperProps {
  children: React.ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return <div className="container max-w-5xl m-auto mt-5">{children}</div>
}

export default Wrapper
