import { useRouter } from 'next/router'

export default function cardDetails() {
    const route = useRouter()
    console.log(route);
    
    return(
        <>
        <h1>hello</h1>
        </>
    )
}