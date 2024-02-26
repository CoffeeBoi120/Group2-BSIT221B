import Link from 'next/link'

function Header() {
    return(
        <>
        <div className="header">
           <h1>Dessert Delights</h1> 
           <Link href="/">Home </Link>
           <Link href="/recipes">Recipes </Link>
           <Link href="/tips">Tips </Link>
           <Link href="/about">About </Link>
        </div>
        </>
    ) 
}

export default Header