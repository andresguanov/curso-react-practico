interface Props {
    children: React.ReactNode
}
export const Layout = ({ children }: Props): JSX.Element => {
    return <div>{children}</div>
}

