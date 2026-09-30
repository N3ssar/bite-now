import MenuItem from "./MenuItem";

export interface MenuItemProps {
  id: string;
  image: string;
  name: string;
  description: string;
  basePrice: number;
  isBestSeller: boolean;
}

export interface MenuProps {
  items: MenuItemProps[];
}

export default function Menu({ items }: MenuProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          basePrice={item.basePrice}
          isBestSeller={item.isBestSeller}
        />
      ))}
    </ul>
  );
}
