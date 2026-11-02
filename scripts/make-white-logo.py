from PIL import Image
from pathlib import Path

src = Path(__file__).resolve().parent.parent / "images" / "logo.png"
dst = Path(__file__).resolve().parent.parent / "images" / "logo-white.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        # Beyaz / açık arka planı şeffaf yap
        if r > 235 and g > 235 and b > 235:
            pixels[x, y] = (255, 255, 255, 0)
        else:
            # Kahverengi çizgileri beyaza çevir
            pixels[x, y] = (240, 235, 227, 255)

img.save(dst)
print(f"Saved {dst}")
