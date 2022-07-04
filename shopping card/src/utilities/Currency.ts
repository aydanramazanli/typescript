const CurrencyFormatter = new Intl.NumberFormat(undefined, { 
    currency: "USD",
    style:"currency"
})


export default function Currency(number: number) {
    return CurrencyFormatter.format(number)
}