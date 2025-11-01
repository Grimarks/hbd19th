# Photo Gallery Instructions

This folder is where you should place all the photos of you and your girlfriend!

## How to add photos:

1. Name your photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
2. You can use any image format (jpg, png, webp)
3. The gallery page is set up to display 12 photos, but you can add more or fewer

## To use your photos in the gallery:

Open `src/pages/Gallery.tsx` and uncomment the `<img>` tag around line 66, then update the import path if needed.

Example:
```jsx
<img 
  src={photoX}
  alt={`Memory ${num}`}
  className="w-full h-full object-cover"
/>
```

And at the top of the file, import your photos:
```jsx
import photo1 from "@/assets/photos/photo1.jpg";
import photo2 from "@/assets/photos/photo2.jpg";
// ... and so on
```

Enjoy creating this special birthday gift! ♡
