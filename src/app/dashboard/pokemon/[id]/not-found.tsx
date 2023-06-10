import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Pokemon not found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/dashboard/pokemons">Todos los pokemons</Link>
      </p>
    </div>
  )
}