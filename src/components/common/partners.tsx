import Image from "next/image";

const partners = [
  { name: "Nike", imageUrl: "/nike.svg" },
  { name: "Adidas", imageUrl: "/adidas.svg" },
  { name: "Puma", imageUrl: "/puma.svg" },
  { name: "New Balance", imageUrl: "/new-balance.svg" },
  { name: "Converse", imageUrl: "/converse.svg" },
  { name: "Polo", imageUrl: "/polo.svg" },
  { name: "Zara", imageUrl: "/zara.svg" },
];

const Partners = () => {
  return (
    <div className="space-y-6">
      <h2 className="pl-5 font-semibold">Marcas parceiras</h2>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center">
            <picture className="flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-gray-200">
              <Image
                src={partner.imageUrl}
                alt={partner.name}
                width={32}
                height={32}
              />
            </picture>
            <h3 className="text-center text-sm font-semibold">
              {partner.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
