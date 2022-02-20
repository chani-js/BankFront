interface Props {
    type: string,
    code: string
}

export default function AccountType (props: Props) {
    return(
        <p>{props.type} ({props.code})</p>
    )
}