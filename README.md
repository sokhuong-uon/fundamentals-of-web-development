# CSS Selectors and Specificity Guide

This guide explains CSS selectors and specificity using practical examples from this project.

## Table of Contents

- [CSS Selectors](#css-selectors)
- [CSS Specificity](#css-specificity)
- [Examples from This Project](#examples-from-this-project)
- [Best Practices](#best-practices)

## CSS Selectors

CSS selectors are patterns used to select and style HTML elements. They determine which elements will be affected by your CSS rules.

### 1. Universal Selector (`*`)

Selects all elements on the page.

```css
* {
  margin: 0px;
  padding: 0px;
}
```

**What it does:** Removes default margins and padding from all elements.

### 2. Class Selector (`.`)

Selects elements with a specific class attribute.

```css
.card {
  font-size: 1rem;
  border: 1px solid;
}
```

**What it does:** Styles all elements with `class="card"`.

### 3. Descendant Selector (space)

Selects elements that are descendants of a specified element.

```css
.card .card-detail {
  /* This would select .card-detail elements inside .card */
}
```

### 4. Child Selector (`>`)

Selects direct children of a specified element.

```css
.card > div {
  /* This would select div elements that are direct children of .card */
}
```

### 5. Adjacent Sibling Selector (`+`)

Selects an element that is directly after another specific element.

```css
.card + .sibling-of-card {
  /* This would select .sibling-of-card that comes immediately after .card */
}
```

### 6. General Sibling Selector (`~`)

Selects all siblings that follow a specified element.

```css
.card:hover ~ .sibling-of-card {
  color: red;
}
```

**What it does:** When hovering over `.card`, all following `.sibling-of-card` elements turn red.

### 7. Pseudo-class Selectors

Select elements based on their state or position.

```css
.card:hover .card-detail {
  display: block;
}
```

**What it does:** When hovering over `.card`, show the `.card-detail` element.

## CSS Specificity

Specificity determines which CSS rule is applied when multiple rules target the same element. It's calculated using a point system.

### Specificity Hierarchy (from highest to lowest):

1. **Inline styles** (1000 points)
2. **ID selectors** (100 points)
3. **Class selectors, attributes, and pseudo-classes** (10 points)
4. **Element selectors and pseudo-elements** (1 point)
5. **Universal selector** (0 points)

### Specificity Calculation Examples:

```css
/* Specificity: 0 points */
* {
  margin: 0;
}

/* Specificity: 1 point */
div {
  border: 1px solid;
}

/* Specificity: 10 points */
.card {
  font-size: 1rem;
}

/* Specificity: 11 points (10 + 1) */
.card div {
  background: blue;
}

/* Specificity: 20 points (10 + 10) */
.card .card-detail {
  background-color: red;
}

/* Specificity: 21 points (10 + 10 + 1) */
.card:hover .card-detail {
  display: block;
}
```

### Specificity in Action

In our project, the `.card-detail` element has these competing rules:

```css
.card-detail {
  width: 50%;
  background-color: red;
  display: none; /* Specificity: 10 points */
}

.card:hover .card-detail {
  display: block; /* Specificity: 21 points - wins! */
}
```

The hover rule wins because it has higher specificity (21 vs 10).

## Examples from This Project

### Example 1: Universal Reset

```css
* {
  margin: 0px;
  padding: 0px;
}
```

This removes browser default spacing from all elements.

### Example 2: Class-based Styling

```css
.card {
  font-size: 1rem;
  border: 1px solid;
}
```

Styles the product card container.

### Example 3: Hidden Details with Hover Effect

```css
.card-detail {
  width: 50%;
  background-color: red;
  display: none; /* Hidden by default */
}

.card:hover .card-detail {
  display: block; /* Shown on hover */
}
```

Creates an interactive reveal effect.

### Example 4: Sibling Styling

```css
.card:hover ~ .sibling-of-card {
  color: red;
}
```

Changes color of all sibling elements that follow the card when hovering.

## Best Practices

### 1. Use Classes for Reusability

```css
/* Good */
.button {
  padding: 10px 20px;
  background: blue;
}

/* Avoid */
#submit-button {
  padding: 10px 20px;
  background: blue;
}
```

### 2. Keep Specificity Low When Possible

```css
/* Good - low specificity */
.card {
  border: 1px solid;
}

/* Avoid - unnecessarily high specificity */
div.container .card {
  border: 1px solid;
}
```

### 3. Use Specificity Intentionally

```css
/* Base styles */
.card {
  background: white;
}

/* Override for special cases */
.card.featured {
  background: gold; /* Higher specificity wins */
}
```

### 4. Avoid `!important`

```css
/* Avoid */
.card {
  background: red !important;
}

/* Better */
.card.urgent {
  background: red; /* Use higher specificity instead */
}
```

### 5. Understand Cascade Order

When specificity is equal, the last rule wins:

```css
.card {
  color: blue; /* This wins */
}

.card {
  color: red; /* This loses (same specificity, but comes later in the file) */
}
```
