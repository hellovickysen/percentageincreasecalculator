---
title: Why a Percentage Increase and Decrease Do Not Cancel Out
description: See why equal percentage increases and decreases use different baselines and leave a net loss instead of returning to the start.
summary: A 10% rise followed by a 10% fall does not break even because the second percentage uses a new baseline.
order: 8
featured: false
---

An equal percentage increase and decrease do not cancel each other. The second calculation uses a different starting value.

## A 10% example

Start with 100.

```text
100 increased by 10% = 110
110 decreased by 10% = 99
```

The increase adds 10. The decrease removes 11 because 10% of 110 is 11. The final value is 99, a net decrease of 1% from the original 100.

## Use multipliers to see the result

A 10% increase has a multiplier of 1.10. A 10% decrease has a multiplier of 0.90.

```text
1.10 × 0.90 = 0.99
```

The combined multiplier is 0.99, so the final value is 99% of the start.

For any equal rate `r` written as a decimal, the combined result is `1 − r²`. A 20% rise and fall gives `1 − 0.20² = 0.96`, leaving a 4% net decrease.

## The recovery percentage must be larger

If a value falls from 100 to 80, returning to 100 requires an increase of 20 on a baseline of 80:

```text
20 ÷ 80 × 100 = 25%
```

A 20% loss therefore needs a 25% gain to recover. A 50% loss needs a 100% gain.

## This is arithmetic, not a forecast

The rule applies to account balances, prices, attendance, and other quantities. It does not predict investment returns or account for taxes, fees, deposits, or withdrawals.

<a class="tool-link" href="/#calculator">Check the recovery increase</a>

For repeated positive changes, read [how compound percentage increases work](/guides/compound-percentage-increases/). To undo a known increase, use the [reverse percentage formula](/guides/reverse-percentage-find-original/).
