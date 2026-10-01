---
title: Used Car Price Prediction
summary: Regression models predicting car prices for ~11,900 vehicles from engine specs, fuel type, transmission, body style and year. Compares OLS, Lasso and Ridge, with Lasso used for feature selection.
category: ml
icon: car
order: 2
showOnHome: true
metric:
  name: R²
  value: '0.87'
  note: 5-fold cross-validation
tags: [Python, scikit-learn, Lasso / Ridge, Feature engineering]
repo: https://github.com/ePaddyy/machine_learning_zoomcamp/tree/ec209044c2d38db07c8a64597dc73b5327b0f91e/models/regression
approach: Started from a numeric-only baseline (test R² 0.57), then added one-hot encoded categoricals with rare-model grouping, raising test R² to 0.82. A cross-validated Lasso kept 86 of 182 features; Ridge reached R² 0.87 under 5-fold cross-validation.
impact: A full regression workflow on messy tabular data, covering baselining, feature engineering, regularisation and honest validation.
---
