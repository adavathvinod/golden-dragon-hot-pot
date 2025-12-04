import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Flame } from "lucide-react";

interface MenuItem {
  name: string;
  nameChinese?: string;
  description: string;
  price: string;
  spicy?: number;
  premium?: boolean;
}

interface MenuCategory {
  name: string;
  nameChinese: string;
  description: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Signature Broths",
    nameChinese: "招牌锅底",
    description: "Choose your perfect base for an authentic hot pot experience",
    items: [
      {
        name: "Traditional Beef Tallow",
        nameChinese: "牛油红锅",
        description: "Our signature Chongqing-style broth with 30+ spices, dried chilies, and premium beef tallow",
        price: "$32",
        spicy: 3,
      },
      {
        name: "9-Grid Spicy",
        nameChinese: "九宫格",
        description: "Traditional 9-compartment pot with varying heat levels in each section",
        price: "$38",
        spicy: 3,
      },
      {
        name: "Dual Pot (Yin Yang)",
        nameChinese: "鸳鸯锅",
        description: "Half spicy beef tallow, half mild bone broth - perfect for sharing",
        price: "$36",
        spicy: 2,
      },
      {
        name: "Tomato Bone Broth",
        nameChinese: "番茄锅",
        description: "Light and tangy tomato-based broth with slow-simmered pork bones",
        price: "$28",
        spicy: 0,
      },
      {
        name: "Mushroom & Herb",
        nameChinese: "菌汤锅",
        description: "Earthy wild mushroom broth with goji berries and Chinese herbs",
        price: "$30",
        spicy: 0,
      },
    ],
  },
  {
    name: "Wagyu & Premium Cuts",
    nameChinese: "和牛精选",
    description: "Hand-selected premium beef for the ultimate hot pot experience",
    items: [
      {
        name: "A5 Japanese Wagyu",
        nameChinese: "A5和牛",
        description: "The finest Japanese Wagyu, marble score 12, sliced paper-thin",
        price: "$88",
        premium: true,
      },
      {
        name: "US Prime Wagyu Ribeye",
        nameChinese: "美国和牛肋眼",
        description: "Richly marbled American Wagyu ribeye, perfect fat distribution",
        price: "$48",
        premium: true,
      },
      {
        name: "Wagyu Beef Belly",
        nameChinese: "和牛牛腩",
        description: "Tender beef belly with beautiful marbling",
        price: "$38",
        premium: true,
      },
      {
        name: "Hand-Cut Beef Slices",
        nameChinese: "手切牛肉",
        description: "Premium beef sliced fresh daily, perfect thickness for hot pot",
        price: "$28",
      },
      {
        name: "Beef Tongue",
        nameChinese: "牛舌",
        description: "Thinly sliced beef tongue, tender and flavorful",
        price: "$26",
      },
    ],
  },
  {
    name: "Lamb & Pork",
    nameChinese: "羊肉猪肉",
    description: "Traditional favorites and specialty cuts",
    items: [
      {
        name: "Premium Lamb Shoulder",
        nameChinese: "精品羊肉卷",
        description: "Tender lamb shoulder, hand-rolled and sliced",
        price: "$32",
      },
      {
        name: "Lamb Leg Slices",
        nameChinese: "羊腿肉",
        description: "Lean and tender lamb leg, perfect for quick cooking",
        price: "$28",
      },
      {
        name: "Pork Belly",
        nameChinese: "五花肉",
        description: "Kurobuta pork belly with perfect fat-to-meat ratio",
        price: "$22",
      },
      {
        name: "Pork Collar",
        nameChinese: "猪颈肉",
        description: "Marbled pork collar, incredibly tender",
        price: "$20",
      },
    ],
  },
  {
    name: "Seafood Selection",
    nameChinese: "海鲜精选",
    description: "Fresh daily selections from the Pacific",
    items: [
      {
        name: "Live Spot Prawns",
        nameChinese: "活斑点虾",
        description: "Sweet and tender Pacific spot prawns, served live",
        price: "Market",
        premium: true,
      },
      {
        name: "Fresh Oysters",
        nameChinese: "新鲜生蚝",
        description: "Pacific oysters, perfect for a quick dip in the broth",
        price: "$18/half dozen",
      },
      {
        name: "Jumbo Sea Scallops",
        nameChinese: "大扇贝",
        description: "U-10 day boat scallops, incredibly sweet",
        price: "$28",
      },
      {
        name: "Fish Fillet",
        nameChinese: "鱼片",
        description: "Fresh white fish, sliced thin for quick cooking",
        price: "$22",
      },
      {
        name: "Seafood Platter",
        nameChinese: "海鲜拼盘",
        description: "Assortment of prawns, scallops, fish, and squid",
        price: "$58",
      },
    ],
  },
  {
    name: "Vegetables & Tofu",
    nameChinese: "蔬菜豆腐",
    description: "Fresh market vegetables and house-made tofu",
    items: [
      {
        name: "Seasonal Greens Platter",
        nameChinese: "时蔬拼盘",
        description: "Chef's selection of daily market vegetables",
        price: "$16",
      },
      {
        name: "Lotus Root",
        nameChinese: "莲藕",
        description: "Crisp lotus root slices, perfect for absorbing broth",
        price: "$10",
      },
      {
        name: "Mushroom Trio",
        nameChinese: "鲜菇三拼",
        description: "Enoki, shiitake, and king oyster mushrooms",
        price: "$14",
      },
      {
        name: "Frozen Tofu",
        nameChinese: "冻豆腐",
        description: "Porous texture perfect for soaking up spicy broth",
        price: "$8",
      },
      {
        name: "Napa Cabbage",
        nameChinese: "大白菜",
        description: "Fresh napa cabbage, sweet and crunchy",
        price: "$8",
      },
    ],
  },
  {
    name: "Noodles & Rice",
    nameChinese: "主食",
    description: "Finish your meal with satisfying carbs",
    items: [
      {
        name: "Sweet Potato Noodles",
        nameChinese: "红薯粉",
        description: "Chewy glass noodles that soak up the broth perfectly",
        price: "$8",
      },
      {
        name: "Hand-Pulled Noodles",
        nameChinese: "手工面",
        description: "Fresh noodles made to order",
        price: "$10",
      },
      {
        name: "Steamed Rice",
        nameChinese: "米饭",
        description: "Premium jasmine rice",
        price: "$4",
      },
    ],
  },
  {
    name: "Beverages",
    nameChinese: "饮品",
    description: "Cool down with our curated drink selection",
    items: [
      {
        name: "Wang Lao Ji",
        nameChinese: "王老吉",
        description: "Traditional Chinese herbal tea, perfect for balancing spice",
        price: "$5",
      },
      {
        name: "Suan Mei Tang",
        nameChinese: "酸梅汤",
        description: "Traditional sweet and sour plum drink",
        price: "$6",
      },
      {
        name: "Coconut Juice",
        nameChinese: "椰汁",
        description: "Fresh coconut juice to cool the palate",
        price: "$6",
      },
      {
        name: "Tsingtao Beer",
        nameChinese: "青岛啤酒",
        description: "Classic Chinese lager",
        price: "$7",
      },
      {
        name: "Sake Selection",
        nameChinese: "清酒",
        description: "Ask your server for our curated sake menu",
        price: "Varies",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Explore</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            From traditional Chongqing broths to premium A5 Wagyu, discover the finest ingredients for your hot pot experience.
          </p>
          <Button variant="hero" asChild>
            <a href="/menu.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download PDF Menu
            </a>
          </Button>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {menuData.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {menuData.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`mb-16 ${categoryIndex !== activeCategory ? "hidden" : ""}`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  {category.name}
                </h2>
                <p className="text-2xl font-chinese text-gold mb-4">{category.nameChinese}</p>
                <p className="text-muted-foreground max-w-xl mx-auto">{category.description}</p>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-elegant ${
                      item.premium
                        ? "border-gold/30 bg-gradient-to-br from-card to-gold/5"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          {item.name}
                          {item.premium && (
                            <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                              Premium
                            </span>
                          )}
                        </h3>
                        {item.nameChinese && (
                          <p className="text-sm font-chinese text-muted-foreground">
                            {item.nameChinese}
                          </p>
                        )}
                      </div>
                      <span className="text-lg font-semibold text-gold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    {item.spicy !== undefined && item.spicy > 0 && (
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Flame
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.spicy! ? "text-primary" : "text-muted"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-2">
                          {item.spicy === 1 ? "Mild" : item.spicy === 2 ? "Medium" : "Spicy"}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* All Categories View */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prices subject to change. Please inform your server of any allergies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
            Ready to Experience Our Menu?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroFilled" size="lg" asChild>
              <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                Reserve a Table
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
