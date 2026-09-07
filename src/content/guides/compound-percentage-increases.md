---
title: How Compound Percentage Increases Work
description: Combine repeated percentage increases correctly by multiplying growth factors instead of adding rates blindly.
summary: Calculate consecutive increases when each new percentage applies to the value produced by the previous step.
order: 10
featured: false
---

Percentage increases compound when each increase applies to the latest value. Multiply the growth factors to find the combined change.

## Two increases in sequence

Suppose a value rises by 10%, then by 20%.

Start with 100:

```text
100 × 1.10 = 110
110 × 1.20 = 132
```

The final value is 132, so the total increase is **32%**, not 30%.

## Combine the multipliers

Convert each rate to a growth multiplier:

```text
(1 + 10 ÷ 100) × (1 + 20 ÷ 100)
= 1.10 × 1.20
= 1.32
```

Subtract 1 from the combined multiplier and multiply by 100. The result is 32%.

## Repeated equal increases

For three annual increases of 5%, use `1.05³`:

```text
1.05 × 1.05 × 1.05 = 1.157625
```

The combined increase is **15.7625%**, slightly more than 15%.

## When rates can be added

Adding rates is correct only when each percentage is calculated from the same unchanged baseline. If three separate additions are each 5% of the original 100, they add 15 in total. If every 5% increase applies to the updated value, they compound.

## Keep the context beside the result

Compounding describes arithmetic. Interest, investments, inflation, and contracts may use specific timing, fees, or definitions. Check the applicable rules before treating a general percentage result as a financial outcome.

<a class="tool-link" href="/#calculator">Calculate one stage of an increase</a>

For the effect of a later decline, read [why equal increases and decreases do not cancel](/guides/percentage-increase-decrease-do-not-cancel/). For ordinary before-and-after comparisons, see [percentage increase versus percentage change](/guides/percentage-increase-vs-percentage-change/).
