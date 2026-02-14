function Details({ categories }: { categories: string[] }) {
  return (
    <section className="p-5 md:p-10 flex-1 bg-(image:--gradient-bg) rounded-lg text-neutral-100 ">
      <h2 className="mb-2 text-lg">Categories</h2>
      <ul className="flex flex-col gap-1 justify-evenly">
        {categories.slice(0, 7).map((category) => (
          <li key={category} className="text-neutral-200">
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Details;
