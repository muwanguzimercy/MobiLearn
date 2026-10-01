const order = {
  id: 'ORD-1002',
  customer: {
    name: 'mercy johnson',
    email: 'mercyjohnson@example.com',
  },
  payment: {
    status: 'paid',
  },
  shipping: {
    status: 'shipped',
    estimatedDelivery: '2026-06-18',
  },
  items: [
    { name: 'Laptop', quantity: 2 },
    { name: 'Tins', quantity: 1 },
  ],
};

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
  ...order,
  payment: { status: 'unpaid' },
  shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));