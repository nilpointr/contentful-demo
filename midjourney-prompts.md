# Midjourney Prompts — Adequate Catering Co.

Prompts for the 9 image placeholders currently in the site. Each entry lists the
filename to save the download as, which Contentful entry/field it belongs on, the
aspect ratio to match the layout, and a ready-to-paste prompt.

## Shared style (baked into every prompt below)

Flat, evenly-lit corporate stock photography — slightly overexposed fluorescent
lighting, muted warm-beige and olive-green tones (matches the site's `#f7f4ec` /
`#6f7754` palette), deadpan and unglamorous, shot on a basic point-and-shoot camera.
Nothing dramatic, nothing appetizing-on-purpose, nothing ugly-on-purpose — just
adequate. `--style raw` keeps Midjourney literal instead of arty.

## Image map

| Filename                              | Contentful entry                  | Field            | Aspect ratio |
| ------------------------------------- | --------------------------------- | ---------------- | ------------ |
| `hero-home.png`                       | `heroHome` (Component: Hero)      | Background Image | 16:9         |
| `hero-corporate.png`                  | `heroCorporate` (Component: Hero) | Background Image | 16:9         |
| `package-bare-necessities.png`        | `pkgBareNecessities`              | Image            | 4:3          |
| `package-standard-deviation.png`      | `pkgStandardDeviation`            | Image            | 4:3          |
| `package-executive-adequacy.png`      | `pkgExecutiveAdequacy`            | Image            | 4:3          |
| `package-client-visiting-upgrade.png` | `pkgClientVisiting`               | Image            | 4:3          |
| `avatar-dave.png`                     | `testimonialDave`                 | Avatar           | 1:1          |
| `avatar-priya.png`                    | `testimonialPriya`                | Avatar           | 1:1          |
| `avatar-anonymous.png`                | `testimonialAnon`                 | Avatar           | 1:1          |

Aspect ratios match how each image is actually cropped on the site (`object-cover`
on a 16:9 hero band, 4:3 package cards, 1:1 circular avatars) so nothing important
gets cropped out.

---

## Hero images (16:9)

### `hero-home.png`

```
Wide establishing shot of a nondescript beige conference room set up for a mediocre office lunch, foil catering trays of plain sandwich halves and a bland vegetable tray on a folding table with a thin plastic tablecloth, stackable office chairs pushed against the wall, fluorescent overhead lighting, worn beige carpet tiles, a half-drunk pitcher of ice water, flat evenly-lit corporate stock photography, slightly overexposed fluorescent lighting, muted warm-beige and olive-green color palette, deadpan and unglamorous composition, ultra-realistic, shot on a basic point-and-shoot camera --ar 16:9 --style raw --no text, logos, watermarks, people
```

### `hero-corporate.png`

```
Wide shot inside a dated corporate office lobby beside an old elevator bank with worn brushed-steel doors and a dim "out of service" light, a catering cart stacked with foil trays of food wrapped in plastic sitting awkwardly in the hallway, scuffed linoleum floor, fluorescent ceiling panels, beige walls, flat evenly-lit corporate stock photography, slightly overexposed fluorescent lighting, muted warm-beige and olive-green color palette, deadpan and unglamorous composition, ultra-realistic, shot on a basic point-and-shoot camera --ar 16:9 --style raw --no text, logos, watermarks, people
```

---

## Package images (4:3)

### `package-bare-necessities.png` — The Bare Necessities Box ($12.99)

```
Overhead flat-lay product photo of a cheap cardboard lunch box containing one plain wrapped half sandwich, one small generic bag of potato chips, and a single plain cookie, sitting open on a plain beige table, soft flat lighting, no garnish, minimal styling, muted warm-beige and olive-green color palette, deadpan unglamorous corporate catering stock photography, ultra-realistic, shot on a basic point-and-shoot camera --ar 4:3 --style raw --no text, logos, watermarks, hands, people
```

### `package-standard-deviation.png` — The Standard Deviation Platter ($16.50)

```
Overhead product photo of a mid-size plastic catering platter with assorted sandwich wedges and wrap halves arranged in a plain circular pattern, a few sprigs of parsley garnish, sitting on a plain foil tray, flat corporate lighting, muted warm-beige and olive-green color palette, deadpan unglamorous corporate catering stock photography, neither appetizing nor unappetizing, ultra-realistic, shot on a basic point-and-shoot camera --ar 4:3 --style raw --no text, logos, watermarks, hands, people
```

### `package-executive-adequacy.png` — The Executive Adequacy Spread ($24.00)

```
Overhead product photo of a slightly upscale corporate catering spread on a foil tray: cubed cheese, water crackers, a few olives, and thin sliced deli meat arranged neatly with a small sprig of rosemary garnish, marginally more careful plating than a standard tray, flat corporate lighting, muted warm-beige and olive-green color palette, deadpan unglamorous corporate catering stock photography, ultra-realistic, shot on a basic point-and-shoot camera --ar 4:3 --style raw --no text, logos, watermarks, hands, people
```

### `package-client-visiting-upgrade.png` — The We Have A Client Visiting Upgrade ($29.99)

```
Overhead product photo nearly identical to a standard corporate catering foil tray of cubed cheese and crackers, the only notable difference being a neatly folded cloth napkin placed beside the tray instead of a paper one, flat corporate lighting, muted warm-beige and olive-green color palette, deadpan unglamorous corporate catering stock photography, ultra-realistic, shot on a basic point-and-shoot camera --ar 4:3 --style raw --no text, logos, watermarks, hands, people
```

---

## Testimonial avatars (1:1)

### `avatar-dave.png` — Dave R., Regional Manager

```
Corporate LinkedIn-style headshot of a middle-aged man in his late 40s wearing a slightly wrinkled short-sleeve button-down shirt, neutral bored expression, plain gray office backdrop, flat even studio lighting, centered composition, head and shoulders only, muted color palette, deadpan corporate stock photography, ultra-realistic --ar 1:1 --style raw --no text, logos, watermarks
```

### `avatar-priya.png` — Priya K., Director of Human Resources

```
Corporate LinkedIn-style headshot of a South Asian woman in her late 30s wearing a plain blazer, professional but faintly unimpressed expression, plain gray office backdrop, flat even studio lighting, centered composition, head and shoulders only, muted color palette, deadpan corporate stock photography, ultra-realistic --ar 1:1 --style raw --no text, logos, watermarks
```

### `avatar-anonymous.png` — Anonymous Attendee, Q3 All-Hands

```
Corporate headshot composition where the subject's identity is deliberately obscured — a generic office worker seen from behind or with face turned away from camera, wearing a plain conference lanyard, standing against a plain gray office backdrop, flat even studio lighting, muted color palette, deadpan corporate stock photography, ultra-realistic --ar 1:1 --style raw --no text, logos, watermarks, visible face
```
