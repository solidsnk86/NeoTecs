import { Card } from "../../components/Card"

export default async function CsvSheets() {
    const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzdlPCNykOkJWbmkFcc3Iw0ZNSVwEnUDgrtCGr0pfDRfVNZmp_iTMaGZfU0z4njNWlFoJ3y3LwFPv/pub?output=csv')
        .then((res) => res.text())
    const drawings = csv
        .split("\n")
        .slice(1)
        .map((row) => {
            const [id, name, image, price] = row.split(",")

            return { id, name, image, price: Number(price) }
        })
    return (
        <section>
            {drawings.map((pic) => (
                <Card>
                    {pic.id}
                    {pic.image}
                    {pic.name}
                    {pic.price}
                </Card>
            ))}
        </section>
    )
}