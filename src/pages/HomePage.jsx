

export default function HomePage() {

    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
  return (
    <div>HomePage</div>
  )
}
