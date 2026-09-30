import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";

export default function BestSellers() {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      image: "/assets/images/pizza.png",
      name: "Margherita Classic",
      description:
        "Fresh mozzarella, tomato sauce, basil, and a perfectly crisp crust.",
      basePrice: 11.99,
      isBestSeller: true
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/images/pizza.png",
      name: "Pepperoni Fire",
      description:
        "Spicy pepperoni, melted cheese, and a roasted tomato finish.",
      basePrice: 12.5,
      isBestSeller: true
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/images/pizza.png",
      name: "Garden Supreme",
      description: "Loaded with veggies, herbs, and a creamy garlic drizzle.",
      basePrice: 13.75,
      isBestSeller: true
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <MainHeading subTitle="checkout" title="Our Best Sellers" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}
