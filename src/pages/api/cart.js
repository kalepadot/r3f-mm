// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const CART = [{
  description: "New complete skateboard from Santa Cruz co.",
  id: "p1",
  imageUrl: "/product-skateboard.jpg",
  price: 149.99,
  quantity: 1,
  title: "Skateboard"
}, {
  description: "Long sleeve inflatable jumpsuit with battery operated fan. Fan requires 4 AA batteries",
  id: "p2",
  imageUrl: "/product-dinosaur.jpg",
  price: 65.67,
  quantity: 2,
  title: "Inflatable Dinosaur Costume"
}, {
  description: "A fusion type power source featuring a palladium core. Developed by Stark Industries.",
  id: "p3",
  imageUrl: "/product-reactor.jpg",
  price: 1000,
  quantity: 1,
  title: "Arc Reactor"
}, {
  description: "4K Waterproof Action Camera with Touch Screen",
  id: "p4",
  imageUrl: "/product-gopro.jpg",
  price: 279.98,
  quantity: 1,
  title: "GoPro Hero 8"
}, {
  description: "Spins all tunes, new and old.",
  id: "p5",
  imageUrl: "/product-record.jpg",
  price: 140,
  quantity: 1,
  title: "Record Player"
}, {
  description: "Professional quality audio equipment; nothing beats these beats!",
  id: "p6",
  imageUrl: "/product-dj.jpg",
  price: 270.1,
  quantity: 1,
  title: "DJ Mixer"
}];

export default function handler(req, res) {
  res.status(200).json(CART)
}
