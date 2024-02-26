import Link from 'next/link'

function Navbar() {
    return(
        <>
        <div className="navBar">
           <h1>Dessert Delights</h1> 
           <Link href="/home">Home </Link>
           <Link href="/recipes">Recipes </Link>
           <Link href="/tips">Tips </Link>
           <Link href="/about">About </Link>
        </div>
        </>
    ) 
}

export default Navbar