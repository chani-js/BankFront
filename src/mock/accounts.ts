type account = {
    amount: number,
    accountName: string,
    available: boolean,
    code: string
}

const accounts: account[] = [
    {
        amount: 1800.85,
        accountName: 'Checking',
        available: true,
        code: "x8349"
    },
    {
        amount: 1028.42,
        accountName: 'Savings',
        available: true,
        code: "x6712"
    },
    {
        amount: 200.30,
        accountName: 'Credit Card',
        available: false,
        code: "x8349"
    }
]

export default accounts