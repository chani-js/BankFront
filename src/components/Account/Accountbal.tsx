import styled from "styled-components"

interface Props {
    balance: number
}

const Balance = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    margin: 5px 0;
`

export default function AccountBal(props: Props) {
    const balanceWithCommas = props.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <Balance>{balanceWithCommas} $</Balance>
    )
}