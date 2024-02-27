import Link from 'next/link'

function Header() {
    return(
        <>
        <div className="header">
           <Link href="/">Dessert Delights </Link>
           <Link href="/home">Home </Link>
           <Link href="/recipelist">Recipes </Link>
           <Link href="/about">About </Link>
        </div>
        </>
    ) 
}

export default Header