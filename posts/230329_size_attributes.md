---
title: Size Attributes of iFrame
publish_date: 2023-03-29
abstract: How to get your iFrames the correct size
disable_html_sanitization: true
---

Adjust the `width` and `height` attributes of your `iframe` element like so:

```html
<iframe width="400" height="442" src="https://editor.p5js.org/capogreco/full/_ZcV86FZA"></iframe>
```

... which will embed like this:

<iframe width="400" height="442" src="https://editor.p5js.org/capogreco/full/_ZcV86FZA"></iframe>

Although you could easily link to the code like [this](https://editor.p5js.org/capogreco/sketches/_ZcV86FZA), it might make more sense to copy and paste the code into a fenced off code block, using two "fences" of three backticks, like this:

````markdown
```javascript
// paste your code here
```
````

In this way we can show code rendered with syntax highlighting, like this:


```javascript
function setup () {
  createCanvas (400, 400)
  rectMode (CENTER)
  fill (`deeppink`)
  noStroke ()
}

function draw () {
  background (`turquoise`)
  
  const p = frameCount / 256
  
  const mid = {
    x: width / 2,
    y: height / 2
  }

  beginShape ()
  for (let i = 0; i < 5; i++) {
    const cnr = rand_coordinate ()
    vertex (cnr.x, cnr.y)
  }
  endShape ()
  
  const x_pos = mid.x + sin (-p * TWO_PI) * 120
  const y_pos = mid.y + cos (p * TWO_PI) * 120
  
  const word_swap = floor (p * 8 % 2)
  const mid_text = word_swap ? `Creative` : `Coding`
  
  // square (x_pos, y_pos, 100)
  textAlign (CENTER, CENTER)
  textStyle (BOLD)
  textSize (48)
  
  text (mid_text, mid.x, mid.y)

  text (`RMIT`, x_pos, y_pos)
  
  text (`Specialisation`, 
        noise (frameCount / 100) * width, 
        noise (0, frameCount / 100) * height, 
       )
}

function rand_coordinate () {
  return { x: random (width), y: random (height) }
}
```

... and discuss the code before and afterwards, without interrupting the flow by needing to navigate to a different tab.

One thing to take note of here is that you will need to add 42 pixels to the height of the canvas for the height of the `<iframe>` element - this is to accomodate for the height of the p5 header that comes default with the embed.







