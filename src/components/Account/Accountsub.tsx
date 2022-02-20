interface Props {
    available: boolean
}

export default function AccountSub(props: Props) {
    return (
        <p>{props.available ? ("Available") : ("Current")} Balance</p>
    )
}