# Image Assets

This directory contains the images used throughout the website.

## Adding Image Assets

### App Mockup Image

To add the app mockup image for the Hero section:

1. Place the app mockup image in the `public/images` directory
2. Name the file `app-mockup.png` (or update the image source in the Hero component)
3. Recommended dimensions: 350px × 600px (or similar 9:16 aspect ratio)

### Company Logos

To add the company logos for the Hero section:

1. Place the logo images in the `public/images/logos` directory
2. Use the following filenames (or update the image sources in the Hero component):
   - `lettuce-entertain-you.png` - Lettuce Entertain You logo
   - `hogsalt.png` - HOGSALT logo
   - `doordash.png` - DOORDASH logo
   - `alamo.png` - ALAMO logo
3. Recommended dimensions: 180px × 70px (or similar aspect ratio)
4. Preferred format: PNG with transparency

## Updating the Hero Component

Once the images are added, update the Hero component in `src/components/sections/Hero.tsx`:

1. Replace the placeholder divs with the actual Image components
2. Example:

```jsx
{
  /* For the app mockup */
}
<Image
  src="/images/app-mockup.png"
  alt="Mobile app interface"
  width={350}
  height={600}
  className="object-contain"
  priority
/>;

{
  /* For the company logos */
}
<Image
  src="/images/logos/lettuce-entertain-you.png"
  alt="Lettuce Entertain You"
  width={180}
  height={70}
  className="h-12 w-auto object-contain"
/>;
```
