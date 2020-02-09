const images = [
  'https://i.picsum.photos/id/1036/4608/3072.jpg',
  'https://i.picsum.photos/id/352/3264/2176.jpg',
  'https://i.picsum.photos/id/357/3888/2592.jpg',
  'https://i.picsum.photos/id/306/1024/704.jpg',
  'https://i.picsum.photos/id/376/5450/3623.jpg',
  'https://i.picsum.photos/id/397/4475/2984.jpg',
  'https://i.picsum.photos/id/445/4256/2819.jpg',
  'https://i.picsum.photos/id/314/4608/3072.jpg',
  'https://i.picsum.photos/id/585/2509/1673.jpg',
  'https://i.picsum.photos/id/625/2507/1674.jpg',
];

export const originalCards = [...images, ...images].map((image, index) => {
  return { id: index + 1, image, isFlipped: true, isFaceUp: false };
});
