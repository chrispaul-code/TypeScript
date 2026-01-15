
interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean; // Optional prop
}


export function ChaiCard(Chprops: ChaiCardProps) {
    return(
        <article>
            <h2>{Chprops.name}</h2>
            <p>Price: ${Chprops.price}</p>
            {Chprops.isSpecial && <strong>Special Offer!</strong>}
        </article>
    )   
}