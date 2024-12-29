import usePokemonInfo from "@/hooks/usePokemonInfo";
import Loader from "@/components/loader/loader";
import Link from "next/link";

export default function Pokemon() {
  const { loading, pokemon } = usePokemonInfo();
  if (loading) return <Loader />;
  return (
    <div>
      <Link href={"/"}>
        <img
          className="w-1/3 mb-5 max-w-10 m-5"
          src="/images/Poké_Ball_icon.svg"
          alt="pokeball image"
        />
      </Link>
      <div className="flex py-10">
        <div className="mx-auto w-4/5 min-w-80">
          <img
            className="w-1/3 m-auto mb-5 max-w-40"
            src={pokemon.image}
            alt="Pokemon"
          />
          <p className="text-sm text-center">#{pokemon.number}</p>
          <h1 className="py-2 font-bold text-4xl text-center">
            {pokemon?.name?.toUpperCase()}
          </h1>
          <div className="flex space-x-2 justify-center">
            {pokemon?.types?.map((type) => (
              <div
                className="rounded-3xl bg-black text-white px-5 type"
                key={type}
                data-testid={type}
              >
                {type}
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
            <div>
              <h2 className="font-bold text-xl">Classification</h2>
              <p className="text-m">{pokemon.classification}</p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Height</h2>
              <p className="text-m">
                {pokemon?.height?.minimum} - {pokemon?.height?.maximum}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Weight</h2>
              <p className="text-m">
                {pokemon?.weight?.minimum} - {pokemon?.weight?.maximum}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Max HP</h2>
              <p className="text-m">{pokemon.maxHP}</p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Max CP</h2>
              <p className="text-m">{pokemon.maxCP}</p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Fleet Rate</h2>
              <p className="text-m">{pokemon.fleeRate}</p>
            </div>
          </div>
          <h2 className="py-2 font-bold text-2xl">Resistant</h2>
          <div className="flex space-x-2 pb-10">
            {pokemon?.resistant?.map((type) => (
              <div className="rounded-3xl bg-black text-white px-5" key={type}>
                {type}
              </div>
            ))}
          </div>
          <h2 className="py-2 font-bold text-2xl">Weaknesses</h2>
          <div className="flex space-x-2 pb-1">
            {pokemon?.weaknesses?.map((type) => (
              <p className="rounded-3xl bg-black text-white px-5" key={type}>
                {type}
              </p>
            ))}
          </div>
          <h2 className="py-2 font-bold text-2xl">Attacks</h2>
          {pokemon.attacks?.fast && (
            <>
              <h2 className="py-2 font-bold text-xl">Fast</h2>
              <table className="w-full text-left table-fixed min-w-max">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Damage</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon?.attacks?.fast.map((attack) => (
                    <tr>
                      <td>{attack.name}</td>
                      <td>{attack.type}</td>
                      <td>{attack.damage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {pokemon.attacks?.special && (
            <>
              <h2 className="py-2 font-bold text-xl">Special</h2>
              <table className="w-full text-left table-fixed min-w-max">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Damage</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon?.attacks?.special.map((attack) => (
                    <tr>
                      <td>{attack.name}</td>
                      <td>{attack.type}</td>
                      <td>{attack.damage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <h2 className="pt-5 font-bold text-2xl">Evolution Requirements</h2>
          <p className="text-m">
            {pokemon.evolutionRequirements?.name}:
            {pokemon.evolutionRequirements?.amount}
          </p>
          <h2 className="pt-5 font-bold text-2xl">Evolutions</h2>
          <div className="grid grid-cols-3 py-5">
            {pokemon?.evolutions?.map((pokemon) => (
              <Link href={"/pokemon/" + pokemon.name} key={pokemon.id}>
                <div className="rounded-3xl px-5" key={pokemon.id}>
                  <img
                    className="h-1/3 min-h-10 max-h-36"
                    src={pokemon.image}
                    alt="Pokemon"
                  />
                  <div className="">{pokemon.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
