export const images: string[] = [
    'https://images.unsplash.com/photo-1682687220975-7b2df674d3ce',
    'https://images.unsplash.com/photo-1691434864891-859ea2f60365',
    'https://images.unsplash.com/photo-1689870215829-3e94e28ec328',
    'https://images.unsplash.com/photo-1691379635079-9f438036ea58'
  ]
  
  const imageByIndex = (index: number): string => images[index % images.length]
  
  export default imageByIndex
  